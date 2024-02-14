// Slider.js
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, List, ListItem, ListItemText,IconButton} from "@material-ui/core";

const Slider = ({ isOpened, setIsOpened ,classes}) => {
  const handleDrawerClose = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Drawer variant="permanent" open={isOpened}  >
      <List>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
        <ListItem button>
          <ListItemText primary=" Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary=" Item 2" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Slider;
