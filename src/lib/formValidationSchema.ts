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

const transactionType=z.enum([
  "CREDIT",
  "DEBIT",
]);

const loanType = z.enum(["LENT", "BORROWED"]);
const loanStatus = z.enum(["PENDING", "PAID"]);

export const accountSchema = z.object({
  accountId: z.number().int().positive().optional(), // Optional because it's auto-generated
  user: z.number().int().positive({ message: "User ID is required" }), // User reference (assumed to be an ID)
  accountName: z.string().min(2, "Account name must be at least 2 characters"),
  accountType: AccountTypeEnum, // Enum validation
  balance: z.number().min(0, "Balance cannot be negative").default(0), // Default to 0
  createdAt: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), "Invalid date format") // Validate date format
    .optional(), // Optional because it's auto-generated
});
export type AccountSchema = z.infer<typeof accountSchema>;

export const userSchema = z.object({
  userId: z.number().optional(),
  name: z.string().min(1, "Name required"),
  email: z.string().email("Enter correct email"),
  phone: z.number().min(0, "Number cannot be negative"),
});
export type UserSchema = z.infer<typeof userSchema>;

export const bankSchema = z.object({
  bankId: z.number().optional(),
  user: z.string().min(1, "Select a user"),
  bankName: z.string().min(1, "Bank name required"),
  accountNumber: z.number().min(12, "Account number required"),
  branchName: z.string().min(1, "Branch name required"),
  ifscCode: z.string().min(1, "Ifsc code required"),
});
export type BankSchema = z.infer<typeof bankSchema>;

export const loanSchema = z.object({
  loanId: z.number().optional(),
  user: z.string().min(1, "Select at least one user"),
  loanType: loanType,
  borrowerOrLenderName: z.string().min(1, "Borrower / lender name required"),
  amount: z.number().min(0, "Cannot be negative"),
  description: z.string().optional(),
  dueDate: z.coerce.date().optional(),
  loanStatus: loanStatus,
  remainingBalance: z.number().min(1, "Remaining balance required"),
});
export type LoanSchema = z.infer<typeof loanSchema>;

export const transactionSchema = z.object({
  transactionId: z.number().optional(),
  account: z.string().min(1, "Select at least one account"),
  transactionType: transactionType,
  amount: z.number().min(0, "Cannot be negative"),
  description: z.string().optional(),
  transactionDate: z.coerce.date({message: "Select date"}),
  category:z.string().min(1,"Enter category type"),
  subCategory:z.string().min(1,"Enter sub category type"),
});
export type TransactionSchema = z.infer<typeof transactionSchema>;

export const loanPaymentSchema = z.object({
  loanPaymentId: z.number().optional(),
  loan: z.string().min(1, "Loan is required"),
  paymentAmount: z.number().min(0, "Cannot be negative"),
  paymentDate: z.coerce.date().optional(),
});
export type LoanPaymentSchema = z.infer<typeof loanPaymentSchema>;

export const categorySchema = z.object({
  categoryId: z.number().optional(),
  name: z.string().min(1, "Category is required"),
});
export type CategorySchema = z.infer<typeof categorySchema>;

export const subCategorySchema = z.object({
  subCategoryId: z.number().optional(),
  category: z.string().min(1, "Category at least one user"),
  subCategoryName: z.string().min(1, "Subcategory is required"),
});
export type SubCategorySchema = z.infer<typeof subCategorySchema>;
