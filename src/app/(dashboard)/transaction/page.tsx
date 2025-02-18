"use client";

import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
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
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "account" },
    { field: "transactionType" },
    { field: "amount" },
    { field: "description" },
    { field: "transactionDate" },
    { field: "category" },
    { field: "subCategory" },
    { field: "linkedLoan" },
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
