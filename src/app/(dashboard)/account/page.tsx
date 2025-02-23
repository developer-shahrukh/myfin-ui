"use client";

import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
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
import FormContainer from "@/components/FormContainer";
import { Add, Delete, Update } from "@mui/icons-material";

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
  const containerStyle = { width: "100%", height: "100%" };
  const gridStyle = { height: "100%", width: "100%" };

  const [data, setData] = useState([
    {
      user: "user1",
      accountName: "John Doe",
      accountType: "CASH",
      balance: "158656",
    },
    {
      user: "user2",
      accountName: "Tonny",
      accountType: "BROKER",
      balance: "95123654",
    },
    {
      user: "user3",
      accountName: "Jonny",
      accountType: "OTHER",
      balance: "7455689",
    },
    {
      user: "user4",
      accountName: "Mikka",
      accountType: "STOCK",
      balance: "1234566",
    },
    {
      user: "user5",
      accountName: "Jwal Singh",
      accountType: "REAL_ESTATE",
      balance: "687426",
    },
    {
      user: "user6",
      accountName: "Amit Kumar",
      accountType: "COMMODITY",
      balance: "23354",
    },
    {
      user: "user7",
      accountName: "Sachin saxena",
      accountType: "LOAN",
      balance: "4655385",
    },
  ]);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "user" },
    { field: "accountName" },
    { field: "accountType" },
    { field: "balance" },
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
      <h6>Accound Details</h6>
      <div style={gridStyle}>
        <div style={{flex:'item-center', gap: '2', justifyContent:'center'}}>
          
        </div>

        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          pagination={true}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
        />
      </div>
    </div>
  );
};

export default page;
