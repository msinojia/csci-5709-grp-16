/* Author: Meet Sinojia */

import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  unread: {
    fontWeight: 800,
    backgroundColor: "#e5e3ff",
  },
}));

const notificationKinds = {
  LIKE: "LIKE",
  COMMENT: "COMMENT",
  FOLLOW: "FOLLOW",
};

const NotificationItem = ({ notification }) => {
  const classes = useStyles();

  const handleClick = () => {
    if (
      notification.kind === notificationKinds.LIKE ||
      notification.kind === notificationKinds.COMMENT
    ) {
      window.location.href = `/posts/${notification.postId}`;
    }
  };

  const getNotificationText = () => {
    switch (notification.kind) {
      case notificationKinds.LIKE:
        return "liked your post";
      case notificationKinds.COMMENT:
        return "commented on your post";
      case notificationKinds.FOLLOW:
        return "followed you";
      default:
        return "";
    }
  };

  return (
    <List
      className={notification.read ? "" : classes.unread}
      component="ul"
      sx={{ width: "100%" }}
    >
      <ListItemButton onClick={handleClick}>
        <ListItemAvatar>
          <Avatar
            alt={`${notification.actionUser.firstName} ${notification.actionUser.lastName}`}
            src={notification.actionUser.profilePic}
          ></Avatar>{" "}
        </ListItemAvatar>
        <ListItemText>
          <Typography
            variant="bolder"
            sx={{ overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%", display: "inline-block" }}
          >
            {notification.actionUser.firstName}{" "}
            {notification.actionUser.lastName}{" "}
            {getNotificationText()}.
          </Typography>
        </ListItemText>
      </ListItemButton>
    </List>
  );
};

export default NotificationItem;
