/* eslint-disable  */
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Social Media Site
          </Typography>
          {/* You can add navigation links or other components here */}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <div
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              {/* Add your sidebar items here */}
              <ListItem button>
                <ListItemText primary="Chat" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Profile" />
              </ListItem>
              {/* Add more sidebar items as needed */}
            </List>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;

