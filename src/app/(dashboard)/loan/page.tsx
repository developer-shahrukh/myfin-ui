'use client'

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  ClientSideRowModelModule,
  ColDef,
  ICellRendererParams,
  ModuleRegistry,
  NumberEditorModule,
  NumberFilterModule,
  PaginationModule,
  RowSelectionModule,
  TextEditorModule,
  TextFilterModule,
  ValidationModule,
  createGrid,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import { IconButton } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import FormContainer from "@/components/FormContainer";

ModuleRegistry.registerModules([
  NumberEditorModule,
  TextEditorModule,
  TextFilterModule,
  NumberFilterModule,
  RowSelectionModule,
  PaginationModule,
  ClientSideRowModelModule,
  ValidationModule,
]);


const page = () => {
  const containerStyle = { width: "100%vw", height: "100%" };
  const gridStyle = { height: "100%", width: "100%" };
  const [loans,setLoans]=useState([]);
  const [loan,setLoan]=useState([]);

  useEffect(()=>{
    getLoans().then((loans)=>{
      setLoans(loans);
    });
    getLoanByCode(loanCode).then((loan)=>{
      setLoans(loan);
    })
  },[loans])
  

  const [data,setData]=useState([
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
  ]);

  const handleEdit = (params: ICellRendererParams) => {
      alert(`Edit row: ${params.data.user}`);
      const newData = data.filter((row) => row.id !== params.data.id);
      setData(newData);
    };
  
    const handleDelete = (params: ICellRendererParams) => {
      alert(`Delete this row`);
      //const newData = data.filter((row) => data.id !== params.data.id);
      //setData(newData);
    };

  const [columnDefs,setColumnDefs]=useState<ColDef[]>([
    {field:"user"},
    {field:"loan"},
    {field:"borrowerOrLenderName"},
    {field:"amount"},
    {field:"description"},
    {field:"dueDate"},
    {field:"status"},
    {field:"remainingBalance"},
    {
      headerName: "Actions",
      field: "actions",
      filter:false,
      editable:false,
      sortable:false,
      cellRenderer: (params: ICellRendererParams) => (
        <div>
          <IconButton onClick={() => handleEdit(params)} color="primary">
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params)} color="error">
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ]);
  const defaultColDef=useMemo(()=>{
    return {
      editable:true,
      filter:true,
      flex:1,
      minWidth:100,
    }
  },[])
  return (
    <div style={containerStyle}>
       <span className="fixed top-12 right-8 m-2 z-50">
        <FormContainer type="create" table="loan" />
      </span>
      <h6>Loan Deatils</h6>
      <div style={gridStyle}>
        
        <AgGridReact
          columnDefs={columnDefs}
          rowData={data}
          pagination={true}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

export default page;
