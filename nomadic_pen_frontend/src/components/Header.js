import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Badge,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

import axios from "axios";

import NavigationDrawer from "./NavigationDrawer";
import NotificationItem from "./Notifications/NotificationItem";

function landing() {
  if (window.location.pathname !== "/") {
    window.location.href = "/";
  }
}

function contact() {
  window.location.href = "/contact";
}

function faq() {
  window.location.href = "/faq";
}

function profile() {
  window.location.href = "/profile";
}

function userLogin() {
  window.location.href = "/login";
}

const Header = () => {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [notificationsAnchorEl, setIsNotificationsAnchorEl] = useState(null);
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
    setIsNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setIsNotificationsAnchorEl(null);
  };

  useEffect(() => {
    const bearerToken = localStorage.getItem("bearerToken");
    setIsAuthenticated(!!bearerToken);

    fetchNotifications();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("bearerToken");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        {/* Hamburger Icon - Visible on smaller screens */}
        {isSmallerScreen && (
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Branding */}
        <button
          style={{
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
          }}
          onClick={landing}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "inline-block",
              border: "2px solid #E3DFFD",
              borderRadius: "5px",
              padding: "4px 8px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              backgroundColor: "black",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                fontSize: "24px",
                color: "#FFFFFF",
              }}
            >
              <span style={{ color: "#BFACE2" }}>The</span>
              <span style={{ color: "#E3DFFD" }}>Nomadic</span>
              <span style={{ color: "#BFACE2" }}>Pen</span>
            </Typography>
          </Box>
        </button>

        {/* Search */}
        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          spacing={1}
        >
          {/* <Grid item xs={12} sm={6} md={4}>
                    <SearchBar
                      variant="outlined"
                      placeholder="Search"
                      startAdornment={
                        <InputAdornment position="start">
                          <IconButton>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Grid> */}
        </Grid>

        {/* Notification bell icon */}
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

        {/* Navigation Options - Visible on larger screens */}
        {!isSmallerScreen && (
          <>
            <IconButton
              color="inherit"
              onClick={() => {
                window.location.href = "/travel-guide";
              }}
            >
              Travel Guide
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => {
                contact();
              }}
            >
              Contact Us
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => {
                faq();
              }}
            >
              FAQs
            </IconButton>
            {isAuthenticated ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    window.location.href = "/subscribe";
                  }}
                >
                  Subscribe
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    window.location.href = "/posts/following";
                  }}
                >
                  Following
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    window.location.href = "/posts/create";
                  }}
                >
                  Create Post
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    profile();
                  }}
                >
                  Profile
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </IconButton>
              </>
            ) : (
              <IconButton
                color="inherit"
                onClick={() => {
                  userLogin();
                }}
              >
                Login
              </IconButton>
            )}
          </>
        )}
      </Toolbar>

      {/* Drawer - Visible on smaller screens */}
      <NavigationDrawer
        anchor="left"
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
      ></NavigationDrawer>
    </AppBar>
  );
};

export default Header;
