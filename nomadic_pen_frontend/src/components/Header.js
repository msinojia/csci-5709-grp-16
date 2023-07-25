import React, { useState } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Grid,
    useMediaQuery,
    useTheme,
} from "@mui/material";

// import { styled } from "@mui/system";

import {
    Menu as MenuIcon,
    Call as ContactUsIcon,
    QuestionMark as FAQsIcon,
    Login as LoginIcon,
} from "@mui/icons-material";

import NavigationDrawer from "./NavigationDrawer";

// const SearchBar = styled(InputBase)(({ theme }) => ({
//     backgroundColor: "#FFFFFF", // White background
//     borderRadius: theme.shape.borderRadius,
//     padding: theme.spacing(0.5, 1),
//     "& .MuiSvgIcon-root": {
//         color: "#000000", // Black color for search icon
//     },
// }));

function landing() {
    if (window.location.pathname !== "/") {
        window.location.href = "/";
    }
}

function contact() {
    window.location.href = "./contact";
}

function faq() {
    window.location.href = "./faq";
}

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
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={toggleDrawer}
                    >
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

                {/* Navigation Options - Visible on larger screens */}
                {!isSmallerScreen && (
                    <>
                        <IconButton
                            color="inherit"
                            onClick={() => {
                                contact();
                            }}
                        >
                            <ContactUsIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={() => {
                                faq();
                            }}
                        >
                            <FAQsIcon />
                        </IconButton>
                        <Button color="inherit" variant="outlined" startIcon={<LoginIcon />}>
                            Login
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
