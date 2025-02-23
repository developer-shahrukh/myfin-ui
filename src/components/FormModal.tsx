
import { useState } from "react"
import { FormModalContainerProps } from "./FormContainer"
import { Add, Close } from "@mui/icons-material";


const FormModal=({table,type,data,id}: FormModalContainerProps & {relatedData:any})=> {
  
  const [open,setOpen]=useState(false);
  
  const Form=()=>{

  
  }
  return (
    <>
    <button
      className={`w-7 h-7 flex items-center justify-center rounded-full gray`}
      onClick={() => setOpen(true)}
    >
      <Add/>
    </button>
    {open && (
      <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
          <Form />
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <Close/>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default FormModal