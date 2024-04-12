/* eslint-disable*/
/* eslint-enable array-callback-return */
import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const sentinel = entries[0];
        if (sentinel.isIntersecting && !isLoading) {
          loadMorePosts();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, [isLoading]);

  const loadMorePosts = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newPosts = Array.from({ length: 10 }, (_, index) => ({
        id: posts.length + index,
        title: `Post ${posts.length + index + 1}`,
        content: `This is the content of post ${posts.length + index + 1}`,
      }));
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setIsLoading(false);
      setPage((prevPage) => prevPage + 1);
    }, 1500);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#121212",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={3}>
        {!isMobile && (
          <Grid item xs={3} style={{ position: "sticky", top: "20px" }}>
            <Paper
              style={{
                padding: "20px",
                textAlign: "center",
                height: "calc(100vh - 40px)",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#1e1e1e",
                color: "#ffffff",
              }}
            >
              <Typography variant="h6" style={{ marginBottom: "20px" }}>
                Menu Options
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "10px" }}>Chat</li>
                <li style={{ marginBottom: "10px" }}>Profile</li>
              </ul>
            </Paper>
          </Grid>
        )}

        <Grid item xs={isMobile ? 12 : 9}>
          <div
            style={{
              height: "calc(100vh - 40px)",
              overflowY: "scroll",
              paddingRight: "20px",
            }}
          >
            {posts.map((post) => (
              <Paper
                key={post.id}
                style={{
                  padding: "20px",
                  marginBottom: "20px",
                  backgroundColor: "#1e1e1e",
                  color: "#ffffff",
                }}
              >
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body1">{post.content}</Typography>
              </Paper>
            ))}
            <div ref={sentinelRef}></div>
            {isLoading && <p>Loading...</p>}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
