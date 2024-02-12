
import React from 'react';
import { Avatar, Button, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

const Profile = () => {
    const navigate=useNavigate()
  const classes = useStyles();

  return (
    <div className={classes.profileContainer}>
      <Avatar className={classes.avatar} alt="User Avatar" src="/path/to/avatar.jpg" />
      <Button variant="contained" color="default" onClick={() => navigate("/login")}>
        Login?
      </Button>
    </div>
  );
};

export default Profile;
