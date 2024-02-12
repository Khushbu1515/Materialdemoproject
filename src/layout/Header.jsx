// Header.js
import React from "react";
import { AppBar, Toolbar, Typography,IconButton } from "@material-ui/core";
import Profile from "./Profile";
import Slider from "./Slider";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ isOpened, setIsOpened, classes }) => {
  const handleMenuIconClick = () => {
    setIsOpened(!isOpened);
  };
  
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleMenuIconClick}
          className={classes.icon}
        >
          <MenuIcon/>
        </IconButton>
      </Toolbar>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Header
        </Typography>
      </Toolbar>
      <Profile />
      {isOpened && <Slider isOpened={isOpened} setIsOpened={setIsOpened} />}
    </AppBar>
  );
};

export default Header;
