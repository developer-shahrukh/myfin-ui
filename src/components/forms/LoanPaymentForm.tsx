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
import { zodResolver } from "@hookform/resolvers/zod";
import { loanPaymentSchema, LoanPaymentSchema } from "@/lib/formValidationSchema";

const LoanPaymentForm = ({
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
  } = useForm<LoanPaymentSchema>({
    resolver: zodResolver(loanPaymentSchema),
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

  const {loans}=relatedData;
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new loan payment" : "Update the loan payment"}
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Payment Amount"
          name="paymentAmount"
          defaultValue={data?.paymentAmount}
          register={register}
          error={errors?.paymentAmount}
        />
        <InputField
          label="Payment date"
          name="paymentDate"
          defaultValue={data?.paymentDate}
          register={register}
          error={errors?.paymentDate}
          type="date"
        />
        
        {data && (
          <InputField
            label="Loan payment id"
            name="loanPaymentId"
            defaultValue={data?.loanPaymentId}
            register={register}
            error={errors?.loanPaymentId}
            hidden
          />
        )}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Loan</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full max-h-20 overflow-y-auto"
            {...register("loan")}
            defaultValue={
              type === "create" ? data?.loan || "" : data?.loan
            }
          >
            <option value="" disabled>
              Loan
            </option>
            {loans && loans.map((loan) => (
              <option value={loan} key={loan}>
                {loan.replace("_", " ")}
              </option>
            ))}
          </select>
          {errors.loan?.message && (
            <p className="text-xs text-red-400">
              {errors.loan.message.toString()}
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

export default LoanPaymentForm;
