// /* eslint-disable  */
// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Paper from "@mui/material/Paper";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import MenuItem from "../components/Menuitem";
// import HomeIcon from "@mui/icons-material/Home";
// import PetsIcon from "@mui/icons-material/Pets";
// import ChatIcon from "@mui/icons-material/Chat";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const Navbar = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         style={{ top: 0, zIndex: 1000 }}
//         sx={{ backgroundColor: "black" }}
//       >
//         <Toolbar>
//           {isMobile && (
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//               onClick={toggleDrawer}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//           {/* Add your image logo here */}
//           <img
//             src="/images/straycarelogo.png"
//             alt="Logo"
//             style={{ height: "40px", marginRight: "10px" }}
//           />
//           {/* Optionally, you can add a Typography component with the site name */}
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             StrayCare Connect
//           </Typography>
//           {/* You can add navigation links or other components here */}
//         </Toolbar>
//       </AppBar>
//       {isMobile && (
//         <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
//           <div
//             role="presentation"
//             onClick={toggleDrawer}
//             onKeyDown={toggleDrawer}
//           >
//             <Paper
//               style={{
//                 padding: "20px",
//                 textAlign: "center",
//                 height: "calc(100vh - 40px)",
//                 width: "50vw",
//                 boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//                 backgroundColor: "#1e1e1e",
//                 color: "#ffffff",
//               }}
//             >
//               <MenuItem
//                 href="/home"
//                 ariaLabel="Home (New unread posts)"
//                 primary="Home"
//                 icon={<HomeIcon sx={{ color: "white" }} />}
//               />
//               <MenuItem
//                 href="/chat"
//                 ariaLabel="Chat"
//                 primary="Chat"
//                 icon={<ChatIcon sx={{ color: "white" }} />}
//               />
//               <MenuItem
//                 href="/profile"
//                 ariaLabel="Profile"
//                 primary="Profile"
//                 icon={<AccountCircleIcon sx={{ color: "white" }} />}
//               />
//             </Paper>
//           </div>
//         </Drawer>
//       )}
//     </>
//   );
// };

// export default Navbar;

export default function Navbar() {
  return (
    <div className="w-full h-[10vh] fixed top-0 bg-custom-bg-secondary">
      <h1>Navbar</h1>
    </div>
  );
}
