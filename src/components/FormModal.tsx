"use client";

import {
  Dispatch,
  SetStateAction,
  useActionState,
  useEffect,
  useState,
} from "react";
import { FormModalContainerProps } from "./FormContainer";
import { AddCircleRounded, Close } from "@mui/icons-material";
import { deleteAccount, deleteLoan, deleteTransaction, deleteUser } from "@/lib/actions";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const AccountForm = dynamic(() => import("./forms/AccountForm"), {
  loading: () => <h1>Loading...</h1>,
});

const deleteActionMap = {
  account: deleteAccount,
  loan: deleteLoan,
  user:deleteUser,
  transaction:deleteTransaction,
};

// Ensure forms return JSX
const forms: {
  [key: string]: (
    setOpen: Dispatch<SetStateAction<boolean>>,
    type: "create" | "update",
    data?: any,
    relatedData?: any
  ) => JSX.Element;
} = {
  account: (setOpen, type, data, relatedData) => (
    <AccountForm setOpen={setOpen} type={type} data={data} relatedData={relatedData} />
  ),
};

const FormModal = ({
  table,
  type,
  data,
  id,
  relatedData,
}: FormModalContainerProps & { relatedData?: any }) => {
  const [open, setOpen] = useState(false);

  const Form = () => {
    const [state, formAction] = useActionState(deleteActionMap[table], {
      success: false,
      error: false,
    });

    const router = useRouter();

    useEffect(() => {
      if (state.success) {
        setOpen(false);
        router.refresh();
      }
    }, [state, router]);

    return type === "delete" && id ? (
      <form action={formAction} className="p-4 flex flex-col gap-4">
        <input type="hidden" name="id" value={id}/>
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen, type, data, relatedData)
    ) : (
      "Form not found!"
    );
  };

  return (
    <div className="relative">
      <button
        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-300"
        onClick={() => setOpen(true)}
      >
        <AddCircleRounded />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Close />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
