import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { styles } from "../styles/styles";

const useStyles = makeStyles(styles);

const Layout = () => {
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(false);
  const isLoggedIn = useSelector((state) => state.mySlice.isLoggedIn);
  const navigate = useNavigate();
 
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={classes.root}>
      <Header isOpened={isOpened} setIsOpened={setIsOpened} classes={classes} />
      <Outlet />     
      <Footer classes={classes} />
    </div>
  );
};

export default Layout;
