"use client";


import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useMemo, useState } from "react";
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
  const containerStyle = { height: "100%", width: "100%vw" };
  const gridStyle = { height: "100%", width: "100%" };

  const [users,setUsers]=useState([]);
  const [userById,setUserById]=useState([]);
  useEffect(()=>{
    getUsers().then((users)=>{
      setUsers(users);
    });
    getUserByCode(userCode).then((user)=>{
      setUserById(user);
    });
  },[]);

  const [data, setData] = useState([
    { name: "abcd", email: "abcdemail@gmail.com", phone: "26597890" },
    { name: "pqr", email: "pqrremail@gmail.com", phone: "65690" },
    { name: "std", email: "stdemail@gmail.com", phone: "8879250" },
    { name: "uvwcd", email: "uvwcdemail@gmail.com", phone: "9956890" },
    { name: "xyz", email: "xyzemail@gmail.com", phone: "79567890" },
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
    { field: "name" },
    { field: "email" },
    { field: "phone" },
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
       <span className="fixed top-12 right-8 m-2 z-50">
        <FormContainer type="create" table="user" />
      </span>
      <h6>User Details</h6>
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
