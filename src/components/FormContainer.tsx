import FormModal from "./FormModal";


export type FormModalContainerProps={
    table: | "user" | "account" | "loan" | "bank" | "transaction";
    type : "create" | "update" | "delete";
    data ?: any;
    id? : string | number;
};

const FormContainer=({table,type,data,id}:FormModalContainerProps)=>{
    var relatedData={};
    return(
        <FormModal 
        table={table}
        type={type}
        data={data}
        id={id}
        relatedData={relatedData}
        />
    )
}

export default FormContainer;