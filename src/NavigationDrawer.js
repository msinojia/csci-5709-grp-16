import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main),
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.primary.main),
}));

const NavigationDrawer = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <StyledListItemButton onClick={() => {}}>
            <StyledListItemText primary="Write Blog" />
          </StyledListItemButton>
          <StyledListItemButton onClick={() => {}}>
            <StyledListItemText primary="Gallery" />
          </StyledListItemButton>
          <StyledListItemButton onClick={() => {}}>
            <StyledListItemText primary="Travel Guide" />
          </StyledListItemButton>
          <StyledListItemButton onClick={() => {}}>
            <StyledListItemText primary="Notifications" />
          </StyledListItemButton>
          <StyledListItemButton onClick={() => {}}>
            <StyledListItemText primary="Profile" />
          </StyledListItemButton>
          <StyledListItemButton onClick={() => {}}>
            <StyledListItemText primary="Logout" />
          </StyledListItemButton>
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default NavigationDrawer;
