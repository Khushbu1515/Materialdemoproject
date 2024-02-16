import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Edit, Visibility, Delete } from "@material-ui/icons";
import { getdata, deletedata, editdata } from "../service";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import {
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
} from "@material-ui/core";
import { createform } from "../service";

const Students = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedId, setEditedId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [Errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    section: "",
    age: "",
    class: "",
  });
  const [formDialog, setformDialog] = useState({
    firstName: "",
    lastName: "",
    section: "",
    age: "",
    class: "",
  });
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const fetchData = async () => {
    try {
      const response = await getdata.GetData();

      setData(response?.data);
    } catch (error) {
      toast.showError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // get the details of data
  useEffect(() => {
    fetchData();
  }, []);
  const resetForm = () => {
    setformDialog({
      firstName: "",
      lastName: "",
      section: "",
      age: "",
      class: "",
    });

    setIsEditMode(false);
  };
  const handleSubmit = async () => {
    if (
      !formDialog.firstName ||
      !formDialog.lastName ||
      !formDialog.section ||
      !formDialog.age ||
      !formDialog.class
    ) {
      setErrors({
        firstName: !formDialog.firstName ? "This is a required field" : "",
        lastName: !formDialog.lastName ? "This is a required field" : "",
        section: !formDialog.section ? "This is a required field" : "",
        age: !formDialog.age ? "This is a required field" : "",
        class: !formDialog.class ? "This is a required field" : "",
      });
      return;
    }
    if (isEditMode) {
      editdata
        .EditData(editedId, formDialog)
        .then((res) => {
          toast.success(res?.message);
          handleModalClose();
          fetchData();
          resetForm();
          setEditedId(null);
        })
        .catch((err) => toast.error(err));
    } else {
      createform
        .CreateForm(formDialog)
        .then((res) => {
          toast.success(res?.message);
          handleModalClose();
          fetchData();
          resetForm();
        })
        .catch((err) => toast.error(err));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformDialog((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };
  const handleEdit = (id) => {
    const selecteddata = data.find((item) => item._id === id);
    setformDialog(selecteddata);
    setModalOpen(true);
    setIsEditMode(true);
    setEditedId(id);
  };
  const handleView = (id) => {
    const selectedData = data.find((item) => item._id === id);
    setViewData(selectedData);
  };
  const handleDelete = (id) => {
    const selecteddata = data.find((item) => item._id === id);
    const selectedId = selecteddata._id;
    console.log(selectedId, "selecteddata");
    deletedata
      .DeleteData(selectedId)
      .then((res) => {
        toast.success(res?.message);
        fetchData();
      })
      .catch((err) => toast.error(err));
  };
  const columns = [
    {
      name: "firstName",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "lastName",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "section",
      selector: (row) => row.section,
      sortable: true,
    },
    {
      name: "age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "class",
      selector: (row) => row.class,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <>
          <Button onClick={() => handleEdit(row._id)}>
            <Edit />
          </Button>
          <Button onClick={() => handleView(row._id)}>
            <Visibility />
          </Button>
          <Button onClick={() => handleDelete(row._id)}>
            <Delete />
          </Button>
        </>
      ),
    },
  ];

  return (
    <Container style={styles.container}>
      <Button style={styles.button} onClick={handleModalOpen}>
        Create Student
      </Button>
      {isLoading ? (
        <Skeleton animation="wave" />
      ) : data.length === 0 ? (
        <div>no data are found</div>
      ) : (
        <DataTable
          pagination
          columns={columns}
          data={data}
          highlightOnHover
          striped
        ></DataTable>
      )}

      <Dialog open={isModalOpen} onClose={handleModalClose}>
        <DialogTitle>
          {isEditMode ? "Edit Student" : "Create Student"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="firstName"
            name="firstName"
            value={formDialog.firstName}
            onChange={handleChange}
          />
          <div className="validation">{Errors?.firstName}</div>
          <TextField
            label="lastName"
            name="lastName"
            value={formDialog.lastName}
            onChange={handleChange}
          />
          <div className="validation">{Errors?.lastName}</div>
          <TextField
            label="section"
            name="section"
            value={formDialog.section}
            onChange={handleChange}
          />
          <div className="validation">{Errors?.section}</div>
          <TextField
            label="age"
            name="age"
            type="number"
            value={formDialog.age}
            onChange={handleChange}
          />
          <div className="validation">{Errors?.age}</div>
          <TextField
            label="class"
            name="class"
            value={formDialog.class}
            onChange={handleChange}
          />
          <div className="validation">{Errors?.class}</div>
        </DialogContent>
        <Button
          type="submit"
          Width="50%"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          submit
        </Button>
      </Dialog>
      <Dialog open={viewData !== null} onClose={() => setViewData(null)}>
        <DialogTitle>View Student</DialogTitle>
        <DialogContent>
          {viewData && (
            <>
              <div>First Name: {viewData.firstName}</div>
              <div>Last Name: {viewData.lastName}</div>
              <div>Section: {viewData.section}</div>
              <div>Age: {viewData.age}</div>
              <div>Class: {viewData.class}</div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default Students;

const styles = {
  container: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "80px 20px 130px 100px",
  },
  button: {
    color: "#2196f3",

    cursor: "pointer",
  },
};
