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
import { categorySchema, CategorySchema, loanPaymentSchema, LoanPaymentSchema, subCategorySchema, SubCategorySchema } from "@/lib/formValidationSchema";

const SubCategoryForm = ({
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
  } = useForm<SubCategorySchema>({
    resolver: zodResolver(subCategorySchema),
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

  const {categories}=relatedData;
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new sub category" : "Update the sub category"}
      </h1>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Sub category name"
          name="subCategoryName"
          defaultValue={data?.subCategoryName}
          register={register}
          error={errors?.subCategoryName}
        />
        
        {data && (
          <InputField
            label="Sub category id"
            name="subCategoryId"
            defaultValue={data?.subCategoryId}
            register={register}
            error={errors?.subCategoryId}
            hidden
          />
        )}
         <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Category</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full max-h-20 overflow-y-auto"
            {...register("category")}
            defaultValue={
              type === "create" ? data?.categories || "" : data?.categories
            }
          >
            <option value="" disabled>
              Category
            </option>
            {categories && categories.map((category) => (
              <option value={category} key={category}>
                {category.replace("_", " ")}
              </option>
            ))}
          </select>
          {errors.category?.message && (
            <p className="text-xs text-red-400">
              {errors.category.message.toString()}
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

export default SubCategoryForm;
