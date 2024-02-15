import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import {getdata} from "../service"
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
  const [data, setData] = useState(false);
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

      setData(response?.data?.rows);
    } catch (error) {
      toast.showError(error);
    }
  };
  // get the details of data
  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createform.CreateForm(formDialog);
      toast.success(response.message);
      setformDialog({
        firstName: "",
        lastName: "",
        section: "",
        age: "",
        class: "",
      });
    } catch (err) {
      toast.error(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformDialog((prevData) => ({ ...prevData, [name]: value }));
  };
  const columns = [
    {
      name: "firstName",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "lastName",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "section",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "age",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "class",
      selector: (row) => row.firstName,
      sortable: true,
    },
  ];
  return (
    <Container style={styles.container}>
      <Button style={styles.button} onClick={handleModalOpen}>
        Create Student
      </Button>
      {data.length === 0 ? (
        <p>No FAQs have been created.</p>
      ) : (
        <DataTable pagination columns={columns} data={data} />
      )}
      <Dialog open={isModalOpen} onClose={handleModalClose}>
        <DialogTitle>Create Student</DialogTitle>
        <DialogContent>
          <TextField
            label="firstName"
            value={formDialog.firstName}
            onChange={handleChange}
          />
          <TextField
            label="lastName"
            value={formDialog.lastName}
            onChange={handleChange}
          />
          <TextField
            label="section"
            value={formDialog.section}
            onChange={handleChange}
          />
          <TextField
            label="age"
            type="number"
            value={formDialog.age}
            onChange={handleChange}
          />
          <TextField
            label="class"
            value={formDialog.class}
            onChange={handleChange}
          />
        </DialogContent>
        <Button
          type="submit"
          Width="50%"
          variant="contained"
          color="primary"
          onChange={handleSubmit}
        >
          submit
        </Button>
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
    padding: "260px",
  },
  button: {
    color: "#2196f3",

    cursor: "pointer",
  },
};
