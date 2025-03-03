import { createAccount, createBank, createUser, updateAccount, updateBank, updateUser } from "@/lib/actions";
import { useRouter } from "next/navigation";

import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import InputField from "../InputField";
import { useForm } from "react-hook-form";
import { accountSchema, AccountSchema, bankSchema, BankSchema, userSchema, UserSchema } from "@/lib/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";


const BankForm = ({
  setOpen,
  type,
  data,
  relatedData,
}: {
  setOpen : Dispatch<SetStateAction<boolean>>,
  type: "create" | "update",
  data?: any,
  relatedData?: any,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<BankSchema>({
        resolver: zodResolver(bankSchema),
      });
    
    const [state,formAction]=useActionState(
        type==="create" ? createBank : updateBank,
        {
            success:false,
            error:false,
        }
    );

    const onSubmit=handleSubmit((data)=>{
        formAction(data);
    });

    const router=useRouter();
    useEffect(()=>{
        if(state.success){
            setOpen(false);
            router.refresh();
        }
    },[state,router]);

    const {users}=relatedData;
    
    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
          <h1 className="text-xl font-semibold">
            {type === "create"
              ? "Create a new bank"
              : "Update the bank"}
          </h1>
    
          <div className="flex justify-between flex-wrap gap-4">
            <InputField
              label="Bank name"
              name="name"
              defaultValue={data?.bankName}
              register={register}
              error={errors?.bankName}
            />
            <InputField
              label="Account number"
              name="accountNumber"
              defaultValue={data?.accountNumber}
              register={register}
              error={errors?.accountNumber}
            />
            <InputField
              label="Branch name"
              name="branchName"
              defaultValue={data?.branchName}
              register={register}
              error={errors?.branchName}
            />
            <InputField
              label="IFSC Code"
              name="ifscCode"
              defaultValue={data?.ifscCode}
              register={register}
              error={errors?.ifscCode}
            />
            
            {data && (
              <InputField
                label="Bank id"
                name="bankId"
                defaultValue={data?.bankId}
                register={register}
                error={errors?.bankId}
                hidden
              />
            )}
            <div className="flex flex-col gap-2 w-full md:w-1/4">
              <label className="text-xs text-gray-500">User</label>
              <select
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full max-h-20 overflow-y-auto"
                {...register("user")}
                defaultValue={
                  type === "create" ? data?.users || "" : data?.users
                }
              >
                <option value="" disabled>
                  Select a User
                </option>
                {users && users.map((user: { id: number; name: string }) => (
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

export default BankForm;
