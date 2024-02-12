import { makeStyles } from "@material-ui/core/styles";
import { styles } from "../styles/styles";
import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
//import Slider from '../layout/Slider';
//import Profile from "../layout/Profile";
const useStyles = makeStyles(styles);
const Home = () => {
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={classes.root}>
      <Header isOpened={isOpened} setIsOpened={setIsOpened} classes={classes} />

      <Footer classes={classes} />
    </div>
  );
};

export default Home;
