import { makeStyles } from "@material-ui/core/styles";
import { styles } from "../styles/styles";
import React, { useState } from "react";

const useStyles = makeStyles(styles);
const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    hiii
    </div>
  );
};

export default Home;
