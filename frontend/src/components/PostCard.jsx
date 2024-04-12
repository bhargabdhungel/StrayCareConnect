/* eslint-disable  */
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";

const Post = ({ username, profilePhoto, content, image, likes, comments }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "auto",
        marginBottom: "20px",
        backgroundColor: "#121212",
        border: "2px solid #808080",
      }}
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Avatar src={profilePhoto} alt={username} />
          <Typography
            variant="subtitle1"
            sx={{ marginLeft: "10px", color: "#ffffff" }}
          >
            {username}
          </Typography>
        </div>
        <Typography
          variant="body1"
          sx={{ marginBottom: "10px", color: "#ffffff" }}
        >
          {content}
        </Typography>
        {image && (
          <CardMedia
            component="img"
            height="auto"
            image={image}
            alt="Post Image"
            sx={{ borderRadius: "8px", marginBottom: "10px" }}
          />
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton size="small" aria-label="like" sx={{ color: "#ffffff" }}>
            <FavoriteIcon />
          </IconButton>
          <Typography
            variant="body2"
            sx={{ marginRight: "10px", color: "#ffffff" }}
          >
            {likes} Likes
          </Typography>
          <IconButton
            size="small"
            aria-label="comment"
            sx={{ color: "#ffffff" }}
          >
            <CommentIcon />
          </IconButton>
          <Typography variant="body2" sx={{ color: "#ffffff" }}>
            {comments} Comments
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
