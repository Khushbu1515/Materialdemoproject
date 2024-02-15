import React, { useState } from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Cookies from "js-cookie";
import { logout } from "../redux/Reducer";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(1),
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.2)", // Adjust the scale value as needed
    },
  },
}));

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  //const login = useSelector((state) => state.mySlice.login.Profile);
  const isLoggedIn = useSelector((state) => state.mySlice.isLoggedIn);

  const handleIconHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={classes.profileContainer}>
      {isLoggedIn && (
        <>
          <IconButton
            aria-label="more"
            aria-controls="menu"
            aria-haspopup="true"
            onMouseOver={handleIconHover}
          >
            <Avatar
              className={classes.avatar}
              alt=""
              src="/path/to/avatar.jpg"
            />
          </IconButton>
          <Popover
            id="menu"
            anchorEl={anchorEl}
            open={anchorEl}
            onClose={handleClosePopover}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={() => navigate("/changepass")}>
              Change password{" "}
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Popover>
        </>
      )}
    </div>
  );
};

export default Profile;
