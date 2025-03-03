import {
  createAccount,
  createLoan,
  updateAccount,
  updateLoan,
} from "@/lib/actions";
import { useRouter } from "next/navigation";

import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import InputField from "../InputField";
import { useForm } from "react-hook-form";
import {
  accountSchema,
  AccountSchema,
  loanSchema,
  LoanSchema,
} from "@/lib/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const LoanForm = ({
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
  } = useForm<LoanSchema>({
    resolver: zodResolver(loanSchema),
  });

  const [state, formAction] = useActionState(
    type === "create" ? createLoan : updateLoan,
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

  const { users } = relatedData;
  const loanStatus = ["PENDING", "PAID"];
  const loanTypes = ["LENT", "BORROWED"];
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new loan" : "Update the loan"}
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Borrower / lender name"
          name="borrowerOrLenderName"
          defaultValue={data?.borrowerOrLenderName}
          register={register}
          error={errors?.borrowerOrLenderName}
        />
        <InputField
          label="Amount"
          name="amount"
          defaultValue={data?.amount}
          register={register}
          error={errors?.amount}
        />
        <InputField
          label="Due date"
          name="dueDate"
          defaultValue={data?.dueDate}
          register={register}
          error={errors?.dueDate}
          type="date"
        />
        <InputField
          label="Remaining balance"
          name="remainingBalance"
          defaultValue={data?.remainingBalance}
          register={register}
          error={errors?.remainingBalance}
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
            label="Loan id"
            name="loanId"
            defaultValue={data?.loanId}
            register={register}
            error={errors?.loanId}
            hidden
          />
        )}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Loan Type</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full max-h-20 overflow-y-auto"
            {...register("loanType")}
            defaultValue={
              type === "create" ? data?.loanTypes || "" : data?.loanTypes
            }
          >
            <option value="" disabled>
              Loan type
            </option>
            {loanTypes.map((loanType) => (
              <option value={loanType} key={loanType}>
                {loanType.replace("_", " ")}
              </option>
            ))}
          </select>
          {errors.loanType?.message && (
            <p className="text-xs text-red-400">
              {errors.loanType.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Loan status</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full max-h-20 overflow-y-auto"
            {...register("loanStatus")}
            defaultValue={
              type === "create" ? data?.loanStatus || "" : data?.loanStatus
            }
          >
            <option value="" disabled>
              Loan status
            </option>
            {loanStatus.map((ls) => (
              <option value={ls} key={ls}>
                {ls.replace("_", " ")}
              </option>
            ))}
          </select>
          {errors.loanStatus?.message && (
            <p className="text-xs text-red-400">
              {errors.loanStatus.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">User</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full max-h-20 overflow-y-auto"
            {...register("user")}
            defaultValue={type === "create" ? data?.users || "" : data?.users}
          >
            <option value="" disabled>
              Select a User
            </option>
            {users &&
              users.map((user: { id: number; name: string }) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))}
          </select>
          {errors.user?.message && (
            <p className="text-xs text-red-400">
              {errors.user.message.toString()}
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

export default LoanForm;
