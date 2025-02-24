"use client";


import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
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
import { IconButton } from "@mui/material";

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

  const [data, setData] = useState([
    {
      account: "account1",
      transactionType: "CREDIT",
      amount: "18525",
      description: "some reasone",
      transactionDate: "10/02/2025",
      category: "purchase",
      subCategory: "general",
      linkedLoan: "some",
    },
    {
      account: "account1",
      transactionType: "CREDIT",
      amount: "18525",
      description: "some reasone",
      transactionDate: "10/02/2025",
      category: "purchase",
      subCategory: "general",
      linkedLoan: "some",
    },
    {
      account: "account1",
      transactionType: "CREDIT",
      amount: "18525",
      description: "some reasone",
      transactionDate: "10/02/2025",
      category: "purchase",
      subCategory: "general",
      linkedLoan: "some",
    },
    {
      account: "account1",
      transactionType: "CREDIT",
      amount: "18525",
      description: "some reasone",
      transactionDate: "10/02/2025",
      category: "purchase",
      subCategory: "general",
      linkedLoan: "some",
    },
    {
      account: "account1",
      transactionType: "CREDIT",
      amount: "18525",
      description: "some reasone",
      transactionDate: "10/02/2025",
      category: "purchase",
      subCategory: "general",
      linkedLoan: "some",
    },
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
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "account" },
    { field: "transactionType" },
    { field: "amount" },
    { field: "description" },
    { field: "transactionDate" },
    { field: "category" },
    { field: "subCategory" },
    { field: "linkedLoan" },
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

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
  }, []);
  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        <h1>Transaction Details</h1>
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
