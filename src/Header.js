import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  InputAdornment,
  InputBase,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { styled } from "@mui/system";

import {
  Search as SearchIcon,
  Create as CreateIcon,
  PhotoCamera as PhotoIcon,
  Info as InfoIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountIcon,
  ExitToApp as LogoutIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

import NavigationDrawer from "./NavigationDrawer";

const SearchBar = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#FFFFFF", // White background
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5, 1),
  "& .MuiSvgIcon-root": {
    color: "#000000", // Black color for search icon
  },
}));

const Header = () => {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ paddingTop: "8px", paddingBottom: "8px" }}>
        {/* Hamburger Icon - Visible on smaller screens */}
        {isSmallerScreen && (
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Branding */}
        <Box
          sx={{
            flexGrow: 1,
            display: "inline-block",
            border: "2px solid #006400",
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
            <span style={{ color: "#99e2bb" }}>Travel</span>
            <span style={{ color: "#1aaf6c" }}>Blog</span>
          </Typography>
        </Box>

        {/* Search */}
        <Grid
          container
          alignItems="center"
          justifyContent="flex-end"
          spacing={1}
        >
          <Grid item xs={12} sm={6} md={4}>
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
          </Grid>
        </Grid>

        {/* Navigation Options - Visible on larger screens */}
        {!isSmallerScreen && (
          <>
            <IconButton color="inherit">
              <CreateIcon />
            </IconButton>
            <IconButton color="inherit">
              <PhotoIcon />
            </IconButton>
            <IconButton color="inherit">
              <InfoIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountIcon />
            </IconButton>
            <Button color="inherit" startIcon={<LogoutIcon />}>
              Logout
            </Button>
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
