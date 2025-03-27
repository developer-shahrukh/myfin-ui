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

const getLoanPayments = () => {
  var promise = new Promise((resolve, reject) => {
    fetch(`/getLoanPayments`)
      .then((response) => {
        return response.json();
      })
      .then((loanPayment) => {
        resolve(loanPayment);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
};

const page = () => {
  const containerStyle = { width: "100%vw", height: "100%" };
  const gridStyle = { height: "100%", width: "100%" };
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<"update" | "delete" | null>(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const [loanPayments,setLoanPayments]=useState([]);

  useEffect(()=>{
    getLoanPayments().then((loanPayment)=>{
      setLoanPayments(loanPayment);
    });
  },[])

  const [data, setData] = useState([
    {
      id: 1,
      loan: "loan1",
      paymentAmount: "12553",
      paymentDate: "01/01/2001",
    },
    {
      id: 2,
      loan: "loan2",
      paymentAmount: "854553",
      paymentDate: "01/01/2001",
    },
    {
      id: 3,
      loan: "loan3",
      paymentAmount: "93654",
      paymentDate: "01/01/2001",
    },
    {
      id: 4,
      loan: "loan4",
      paymentAmount: "966452",
      paymentDate: "01/01/2001",
    },
    {
      id: 5,
      loan: "loan5",
      paymentAmount: "954425",
      paymentDate: "01/01/2001",
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
    { field: "id" },
    { field: "loan" },
    { field: "loanAmount" },
    { field: "paymentDate" },
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
        <FormContainer type="create" table="loanPayment" />
      </span>
      <h6>Loan Payments Details</h6>
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
