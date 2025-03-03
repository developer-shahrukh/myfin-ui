import { useRouter } from "next/navigation";

import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import InputField from "../InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  transactionSchema,
  TransactionSchema,
} from "@/lib/formValidationSchema";
import { createTransaction, updateTransaction } from "@/lib/actions";

const TransactionForm = ({
  setOpen,
  type,
  data,
  relatedData,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  type: "create" | "update";
  data?: any;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionSchema>({
    resolver: zodResolver(transactionSchema),
  });

  const [state, formAction] = useActionState(
    type === "create" ? createTransaction : updateTransaction,
    {
      success: false,
      error: false,
    }
  );

  const onSubmit = handleSubmit((data) => {
    formAction(data);
  });

  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      setOpen(false);
      router.refresh();
    }
  }, [state, router]);

  const { accounts } = relatedData;
  const transactionType = ["CREDIT", "DEBIT"];

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create"
          ? "Create a new transaction"
          : "Update the transaction"}
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Category"
          name="category"
          defaultValue={data?.category}
          register={register}
          error={errors?.category}
        />
        <InputField
          label="Sub category"
          name="subCategory"
          defaultValue={data?.subCategory}
          register={register}
          error={errors?.subCategory}
        />
        <InputField
          label="Amount"
          name="amount"
          defaultValue={data?.amount}
          register={register}
          error={errors?.amount}
        />
        <InputField
          label="Transaction date"
          name="transactionDate"
          defaultValue={data?.transactionDate}
          register={register}
          error={errors?.transactionDate}
          type="date"
        />
        <InputField
          label="Description"
          name="description"
          defaultValue={data?.description}
          register={register}
          error={errors?.description}
          multiline={true}
        />

        {data && (
          <InputField
            label="Transaction id"
            name="transactionId"
            defaultValue={data?.transactionId}
            register={register}
            error={errors?.transactionId}
            hidden
          />
        )}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Transaction Type</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full max-h-20 overflow-y-auto"
            {...register("transactionType")}
            defaultValue={
              type === "create" ? data?.transactionTypes || "" : data?.transactionTypes
            }
          >
            <option value="" disabled>
              Transaction type
            </option>
            {transactionType.map((tp) => (
              <option value={tp} key={tp}>
                {tp.replace("_", " ")}
              </option>
            ))}
          </select>
          {errors.transactionType?.message && (
            <p className="text-xs text-red-400">
              {errors.transactionType.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Accounts</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full max-h-20 overflow-y-auto"
            {...register("account")}
            defaultValue={type === "create" ? data?.accounts || "" : data?.accounts}
          >
            <option value="" disabled>
              Select a Account
            </option>
            {accounts &&
              accounts.map((account: { id: number; name: string }) => (
                <option value={account.id} key={account.id}>
                  {account.name}
                </option>
              ))}
          </select>
          {errors.account?.message && (
            <p className="text-xs text-red-400">
              {errors.account.message.toString()}
            </p>
          )}
        </div>
      </div>
      {state.error && (
        <span className="text-red-500">Something went wrong!</span>
      )}
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TransactionForm;
