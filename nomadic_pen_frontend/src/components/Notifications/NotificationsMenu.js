import React, { useState, useEffect } from "react";
import { Menu, MenuItem, IconButton, Badge, Button, List } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";

import NotificationItem from "./NotificationItem";
import axios from "axios";

const NotificationsMenu = () => {
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const notificationsOpen = Boolean(notificationsAnchorEl);
  const [notifications, setNotifications] = useState([]);
  const [newNotifications, setNewNotifications] = useState(3);

  const backendUrl = "https://nomadic-pen.onrender.com";
  const userId = localStorage.getItem("email");

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/notifications?userId=${userId}`
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

  const handleMarkAllAsRead = async () => {
    await axios.put(`${backendUrl}/notifications/mark-all-read`, { userId });
    window.location.reload();
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

      {/* Notifications Menu */}
      <Menu
        anchorEl={notificationsAnchorEl}
        open={notificationsOpen}
        onClose={handleNotificationsClose}
      >
        {/* Mark All as Read Button */}
        <MenuItem onClick={handleMarkAllAsRead}>
          <Button variant="contained" color="primary" fullWidth>
            Mark All as Read
          </Button>
        </MenuItem>

        {/* List of Notifications */}
        <List
          sx={{
            maxHeight: "50vh",
            overflowY: "auto",
          }}
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
        </List>
      </Menu>
    </>
  );
};

export default NotificationsMenu;
