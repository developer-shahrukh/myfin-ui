"use client";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
import { ColDef } from "ag-grid-community";
import {
  ClientSideRowModelModule,
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
  const gridStyle = { height: "100%", width: "100%" };

  const [data, setData] = useState([
    {
      user: "user1",
      bankName: "sbi",
      accountNumber: "6654623548",
      branchName: "Palasiya",
      ifscCode: "sbin003023",
    },
    {
      user: "user2",
      bankName: "Canera",
      accountNumber: "1323654478",
      branchName: "Khajrana indore",
      ifscCode: "CANERA963458",
    },
    {
      user: "user3",
      bankName: "BOI",
      accountNumber: "6356495496",
      branchName: "Rajwada indore",
      ifscCode: "BOI98945",
    },
    {
      user: "user4",
      bankName: "BOB",
      accountNumber: "774596965485",
      branchName: "Ujjain Towerchok",
      ifscCode: "BOB02934",
    },
    {
      user: "user5",
      bankName: "ICICI",
      accountNumber: "8785463548",
      branchName: "Freeganj",
      ifscCode: "ICICI0935981",
    },
  ]);
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "user" },
    { field: "bankName" },
    { field: "accountNumber" },
    { field: "branchName" },
    { field: "ifscCode" },
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
        <AgGridReact
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
        />
      </div>
    </div>
  );
};

export default page;
