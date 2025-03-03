import { createAccount, createUser, updateAccount, updateUser } from "@/lib/actions";
import { useRouter } from "next/navigation";

import { Dispatch, SetStateAction, useActionState, useEffect } from "react";
import InputField from "../InputField";
import { useForm } from "react-hook-form";
import { accountSchema, AccountSchema, userSchema, UserSchema } from "@/lib/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";


const UserForm = ({
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
      } = useForm<UserSchema>({
        resolver: zodResolver(userSchema),
      });
    
    const [state,formAction]=useActionState(
        type==="create" ? createUser : updateUser,
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

    
    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
          <h1 className="text-xl font-semibold">
            {type === "create"
              ? "Create a new user"
              : "Update the user"}
          </h1>
    
          <div className="flex justify-between flex-wrap gap-4">
            <InputField
              label="Name"
              name="name"
              defaultValue={data?.name}
              register={register}
              error={errors?.name}
            />
            <InputField
              label="Email Id"
              name="email"
              defaultValue={data?.email}
              register={register}
              error={errors?.email}
            />
            <InputField
              label="Phone number"
              name="phone"
              defaultValue={data?.phone}
              register={register}
              error={errors?.phone}
            />
            
            {data && (
              <InputField
                label="User id"
                name="userId"
                defaultValue={data?.userId}
                register={register}
                error={errors?.userId}
                hidden
              />
            )}
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

export default UserForm;
