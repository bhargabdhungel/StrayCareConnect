// /* eslint-disable*/
// /* eslint-enable array-callback-return */
// import React, { useState, useEffect, useRef } from "react";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import PetsIcon from "@mui/icons-material/Pets";
// import ChatIcon from "@mui/icons-material/Chat";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MenuItem from "../components/Menuitem";
// import Post from "../components/PostCard";
// import CircularProgress from "@mui/material/CircularProgress";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import HelpIcon from "@mui/icons-material/Help";
// import GroupIcon from "@mui/icons-material/Group";
// import EmailIcon from "@mui/icons-material/Email";
// import Avatar from "@mui/material/Avatar";
// import axios from "axios";
// const HomePage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

import Menu from "../components/Menu";
import Pages from "../components/Pages";

//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [page, setPage] = useState(0);
//   const sentinelRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const sentinel = entries[0];
//         if (sentinel.isIntersecting && !isLoading) {
//           loadMorePosts();
//         }
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 1.0,
//       }
//     );
//     if (sentinelRef.current) {
//       observer.observe(sentinelRef.current);
//     }

//     return () => {
//       if (sentinelRef.current) {
//         observer.unobserve(sentinelRef.current);
//       }
//     };
//   }, [isLoading]);

// const loadMorePosts = () => {
//   setIsLoading(true);
//   setTimeout(() => {
//     const newPosts = Array.from({ length: 10 }, (_, index) => ({
//       id: posts.length + index,
//       title: `Post ${posts.length + index + 1}`,
//       content: `This is the content of post ${posts.length + index + 1}`,
//     }));
//     setPosts((prevPosts) => [...prevPosts, ...newPosts]);
//     setIsLoading(false);
//     setPage((prevPage) => prevPage + 1);
//   }, 1500);
// };

//   return (
//     <div
//       style={{
//         padding: "40px",
//         backgroundColor: "#121212",
//         minHeight: "90vh",
//       }}
//     >
//       <Grid container spacing={3}>
//         {!isMobile && (
//           <Grid item xs={3} style={{ position: "sticky", top: "20px" }}>
//             <Paper
//               style={{
//                 padding: "20px",
//                 textAlign: "center",
//                 height: "calc(100vh - 40px)",
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
//               <MenuItem
//                 href="/adopt"
//                 ariaLabel="Adopt"
//                 primary="Adopt"
//                 icon={<FavoriteIcon sx={{ color: "white" }} />}
//               />
//               <MenuItem
//                 href="/sponsor"
//                 ariaLabel="Sponsor"
//                 primary="Sponsor"
//                 icon={<AttachMoneyIcon sx={{ color: "white" }} />}
//               />
//               <MenuItem
//                 href="/support"
//                 ariaLabel="Support"
//                 primary="Support"
//                 icon={<HelpIcon sx={{ color: "white" }} />}
//               />
//               <MenuItem
//                 href="/orgs"
//                 ariaLabel="NGOs"
//                 primary="NGOs"
//                 icon={<GroupIcon sx={{ color: "white" }} />}
//               />
//               <MenuItem
//                 href="/contact"
//                 ariaLabel="Contact"
//                 primary="Contact"
//                 icon={<EmailIcon sx={{ color: "white" }} />}
//               />
//             </Paper>
//           </Grid>
//         )}

//         <Grid item xs={isMobile ? 12 : 9}>
//           <div
//             style={{
//               height: "80vh",
//               overflowY: "scroll",
//               paddingRight: "20px",
//             }}
//           >
//             {posts.map((post) => (
//               <div key={post.id}>
//                 <Post
//                   username="kela"
//                   content={post.content}
//                   likes="10"
//                   comments="10"
//                 />
//               </div>
//             ))}
//             <div ref={sentinelRef}></div>
//             {isLoading && (
//               <div style={{ textAlign: "center", marginTop: "20px" }}>
//                 <CircularProgress color="inherit" sx={{ color: "#ffffff" }} />
//               </div>
//             )}
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default HomePage;

export default function Home() {
  return (
    <div className="w-full h-[90vh] relative top-[10vh] flex">
      <Menu />
      <Pages />
    </div>
  );
}
