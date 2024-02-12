// Slider.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const Slider = ({ isOpened, setIsOpened }) => {
  const handleDrawerClose = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Drawer variant="permanent" open={isOpened}>
      <List>
        <ListItem button onClick={handleDrawerClose}>
          <ListItemText primary="Close Slider" />
        </ListItem>
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
