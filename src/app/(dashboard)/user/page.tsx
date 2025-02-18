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
  const gridStyle = { height: "100%", width: "100%" };

  const [data, setData] = useState([
    { name: "abcd", email: "abcdemail@gmail.com", phone: "26597890" },
    { name: "pqr", email: "pqrremail@gmail.com", phone: "65690" },
    { name: "std", email: "stdemail@gmail.com", phone: "8879250" },
    { name: "uvwcd", email: "uvwcdemail@gmail.com", phone: "9956890" },
    { name: "xyz", email: "xyzemail@gmail.com", phone: "79567890" },
  ]);

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "name" },
    { field: "email" },
    { field: "phone" },
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
          pagination={true}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

export default page;
