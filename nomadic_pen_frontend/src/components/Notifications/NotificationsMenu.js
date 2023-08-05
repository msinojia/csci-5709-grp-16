import React, { useState, useEffect } from "react";
import { Menu, MenuItem, IconButton, Badge } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import axios from "axios";
import NotificationItem from "./NotificationItem";

const NotificationsMenu = () => {
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const notificationsOpen = Boolean(notificationsAnchorEl);
  const [notifications, setNotifications] = useState([]);
  const [newNotifications, setNewNotifications] = useState(3);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "http://0.0.0.0:8000/notifications?authorId=sreejith.nair@dal.ca"
      );

      setNotifications(response.data.notifications);

      const unreadNotifications = response.data.notifications.filter(
        (notification) => !notification.read
      );
      setNewNotifications(unreadNotifications.length);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const handleNotificationsClick = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      <IconButton color="inherit" onClick={handleNotificationsClick}>
        <Badge badgeContent={newNotifications} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={notificationsAnchorEl}
        open={notificationsOpen}
        onClose={handleNotificationsClose}
      >
        {notifications.map((notification) => (
          <MenuItem
            key={notification._id}
            onClick={handleNotificationsClose}
            divider
          >
            <NotificationItem notification={notification} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NotificationsMenu;
