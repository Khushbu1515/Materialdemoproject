// Slider.js
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Avatar,
  
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Slider = ({ isOpened, setIsOpened, classes }) => {
  const navigate = useNavigate();
  const handleDrawerClose = () => {
    setIsOpened(!isOpened);
  };
  const navigateToStudents = () => {
    navigate("/students");
  };
  return (
    <Drawer variant="permanent" open={isOpened}>
      <List>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      
        <ListItem button>
          <IconButton
            aria-label="more"
            aria-controls="menu"
            aria-haspopup="true"
          >
            <Avatar
              style={{ width: "24px", height: "24px" }}
              alt=""
              src="/path/to/avatar.jpg"
            />
          </IconButton>
          <ListItemText onClick={navigateToStudents} primary="Students" />
        </ListItem>
        <ListItem button>
          <IconButton
            aria-label="more"
            aria-controls="menu"
            aria-haspopup="true"
          >
            <Avatar
              style={{ width: "24px", height: "24px" }}
              alt=""
              src="/path/to/avatar.jpg"
            />
          </IconButton>
          <ListItemText primary="item 2" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Slider;
