/* Author: Meet Sinojia */

import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  unread: {
    fontWeight: 800,
    backgroundColor: "#e5e3ff",
  },
}));

const NotificationItem = ({ notification }) => {
  const classes = useStyles();

  const handleClick = () => {
    window.location.href = `/posts/${notification.postId}`;
  };

  return (
    <List
      className={notification.read ? "" : classes.unread}
      component="ul"
      sx={{ width: "100%" }}
    >
      <ListItem button onClick={handleClick}>
        <ListItemAvatar>
          <Avatar
            alt={`${notification.actionUser.firstName} ${notification.actionUser.lastName}`}
            src={notification.actionUser.profilePic}
          ></Avatar>{" "}
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="bolder">
            {notification.actionUser.firstName}{" "}
            {notification.actionUser.lastName} liked your post.
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default NotificationItem;
