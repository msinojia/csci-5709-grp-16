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

function contact() {
    window.location.href = "./contact";
}

function faq() {
    window.location.href = "./faq";
}

const NavigationDrawer = ({ isDrawerOpen, toggleDrawer }) => {
    return (
        <ThemeProvider theme={theme}>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <List>
                    <StyledListItemButton onClick={() => {}}>
                        <StyledListItemText primary="Login" />
                    </StyledListItemButton>
                    <StyledListItemButton
                        onClick={() => {
                            contact();
                        }}
                    >
                        <StyledListItemText primary="Contact Us" />
                    </StyledListItemButton>
                    <StyledListItemButton
                        onClick={() => {
                            faq();
                        }}
                    >
                        <StyledListItemText primary="FAQs" />
                    </StyledListItemButton>
                </List>
            </Drawer>
        </ThemeProvider>
    );
};

export default NavigationDrawer;
