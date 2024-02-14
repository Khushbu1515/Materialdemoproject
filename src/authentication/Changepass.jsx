import { useState } from "react";
import { toast } from "react-toastify";
import { changepass } from "../service";
import { Container, TextField, Button, IconButton } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Header from "../layout/Header";

import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const Changepass = () => {
  const [showprevPassword, setShowprevPassword] = useState(false);
  const [shownewPassword, setShownewPassword] = useState(false);
  const [form, setForm] = useState({ userId: "", newPassword: "" });

  const handleInputchange = (e) => {
    const { name, value } = e.target;
    setForm((newpass) => ({ ...newpass, [name]: value }));
  };

  const PrePasswordVisibility = () => {
    setShowprevPassword(!showprevPassword);
  };

  const NewPasswordVisibility = () => {
    setShownewPassword(!shownewPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await changepass.ChangePass(form);
      toast.success(response.message);
      setForm({ userId: "", newPassword: "" });
    } catch (err) {
      toast.error(err);
    }
  };

  return (

    <Container style={styles.container}>
     <Header/>
      <form onSubmit={handleSubmit} style={styles.form}>
        <TextField
          style={styles.input}
          type={showprevPassword ? "text" : "password"}
          id="userId"
          name="userId"
          label="UserId"
          variant="outlined"
          fullWidth
          onChange={handleInputchange}
          value={form.userId}
          required
        />
        <IconButton onClick={PrePasswordVisibility}>
          {showprevPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>

        <TextField
          style={styles.input}
          type={shownewPassword ? "text" : "password"}
          id="newPassword"
          name="newPassword"
          label="NewPassword"
          variant="outlined"
          fullWidth
          onChange={handleInputchange}
          value={form.newPassword}
          required
        />
        <IconButton onClick={NewPasswordVisibility}>
          {shownewPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </form>
      <Button
        style={styles.button}
        type="submit"
        variant="contained"
        color="primary"
      >
        Change Password
      </Button>
    </Container>
  );
};

export default Changepass;

const styles = {
  container: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "50%",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    marginTop: "20px",
  },
  heading: {
    fontSize: "25px",
    textAlign: "center",
    margin: "20px 0",
  },
  input: {
    marginBottom: "15px",
  },
  button: {
    marginTop: "15px",
  },
};
