import { z } from "zod";

const AccountTypeEnum = z.enum([
    "BANK",
    "CASH",
    "BROKER",
    "OTHER",
    "STOCK",
    "REAL_ESTATE",
    "COMMODITY",
    "LOAN",
  ]);

export const accountSchema = z.object({
  accountId: z.number().int().positive().optional(), // Optional because it's auto-generated
  user: z.number().int().positive({ message: "User ID is required" }), // User reference (assumed to be an ID)
  accountName: z.string().min(2, "Account name must be at least 2 characters"),
  accountType: AccountTypeEnum, // Enum validation
  balance: z
    .number()
    .min(0, "Balance cannot be negative")
    .default(0), // Default to 0
  createdAt: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date format") // Validate date format
    .optional(), // Optional because it's auto-generated
});
export type AccountSchema=z.infer<typeof accountSchema>;