"use client";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState } from "react";
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

const getSubCategories = () => {
  var promise = new Promise((resolve, reject) => {
    fetch(`/getSubCategories`)
      .then((response) => {
        return response.json();
      })
      .then((subCategories) => {
        resolve(subCategories);
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

  const [data, setData] = useState([
    {
      id: 1,
      category: "category1",
      subCategoryName: "sub1"
    },
    {
      id: 2,
      category: "category2",
      subCategoryName: "sub2"
    },
    {
      id: 3,
      category: "category3",
      subCategoryName: "sub3"
    },
    {
      id: 4,
      category: "category4",
      subCategoryName: "sub4"
    },
    {
      id: 5,
      category: "category5",
      subCategoryName: "sub5"
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
    { field: "category" },
    {field: "subCategoryname"},
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

      <h6>Sub Categories</h6>

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
