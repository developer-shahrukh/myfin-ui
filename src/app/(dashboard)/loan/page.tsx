'use client'

import {
  ClientSideRowModelModule,
  ColDef,
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
import { useMemo, useState } from "react";

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
  const containerStyle = { height: "100%", width: "100%" };
  const gridStyle = { height: "90%", width: "100%" };

  const [data,setData]=useState([
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
    {user:"user1",loan:"loan",borrowerOrLenderName:"borrowername",amount:"466546",description:"some description",dueDate:"12/01/2025",status:"running",remainingBalance:"966546"},
  ]);
  const [columnDefs,setColumnDefs]=useState<ColDef[]>([
    {field:"user"},
    {field:"loan"},
    {field:"borrowerOrLenderName"},
    {field:"amount"},
    {field:"description"},
    {field:"dueDate"},
    {field:"status"},
    {field:"remainingBalance"},
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
      <div style={gridStyle}>
        <h1>Loan page</h1>
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
