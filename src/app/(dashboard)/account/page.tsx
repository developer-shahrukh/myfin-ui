"use client";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
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
import FormContainer from "@/components/FormContainer";
import { Add, AddCircleOutline, Delete, Update } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { getAccountByCode, getAccounts } from "@/lib/utils";

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
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<"update" | "delete" | null>(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const [accounts,setAccounts]=useState([]);
  const [account,setAccount]=useState([]);
  const [accountCode,setAccountCode]=useState(0);
  
  useEffect(()=>{
    getAccounts().then((accountDetails)=>{
      setAccounts(accountDetails);
    });
    getAccountByCode(accountCode).then((accountDetail)=>{
      setAccount(accountDetail);
    });
  },[]);
  const [data, setData] = useState([
    {
      id: 1,
      user: "user1",
      accountName: "John Doe",
      accountType: "CASH",
      balance: "158656",
    },
    {
      id: 2,
      user: "user2",
      accountName: "Tonny",
      accountType: "BROKER",
      balance: "95123654",
    },
    {
      id: 3,
      user: "user3",
      accountName: "Jonny",
      accountType: "OTHER",
      balance: "7455689",
    },
    {
      id: 4,
      user: "user4",
      accountName: "Mikka",
      accountType: "STOCK",
      balance: "1234566",
    },
    {
      id: 5,
      user: "user5",
      accountName: "Jwal Singh",
      accountType: "REAL_ESTATE",
      balance: "687426",
    },
    {
      id: 6,
      user: "user6",
      accountName: "Amit Kumar",
      accountType: "COMMODITY",
      balance: "23354",
    },
    {
      id: 7,
      user: "user7",
      accountName: "Sachin saxena",
      accountType: "LOAN",
      balance: "4655385",
    },
  ]);

  const handleEdit = (data:any) => {
    /*alert(`Edit row: ${params.data.user}`);
    const newData = data.filter((row) => row.id !== params.data.id);
    setData(newData);*/
    alert(`Edit modal`);
    setOpenModal(true);
    setSelectedRow(data);
    setModalType("update");
    alert(`Updated done`);
    
  };

  const handleDelete = (data :any) => {
    alert(`delete modal`)
    setSelectedRow(data);
    setModalType("delete");
    setOpenModal(true);
    alert(`Delete done`);
  };
  const [columnDefs, setColumnDefs] = useState<ColDef[]>([
    { field: "user" },
    { field: "accountName" },
    { field: "accountType" },
    { field: "balance" },
    {
      headerName: "Actions",
      field: "actions",
      filter: false,
      editable: false,
      sortable: false,
      cellRenderer: (params: ICellRendererParams) => (
        <div>
        <IconButton color="primary" onClick={() => handleEdit(params.data)}>
          <EditIcon />
        </IconButton>
        <IconButton color="error" onClick={() => handleDelete(params.data)}>
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
    <div style={containerStyle} className="ag-theme-alpine">
      <span className="fixed top-12 right-8 m-2 z-50">
        <FormContainer type="create" table="account" />
      </span>

      <h6>Accound Details</h6>

      <div style={gridStyle}>
        <div
          style={{ flex: "item-center", gap: "2", justifyContent: "center" }}
        ></div>
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
