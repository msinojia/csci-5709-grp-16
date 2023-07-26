/* Author: Sreejith Nair */

import {Box, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import * as MUI from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import React, {useState} from "react";
import EditPenNameDialog from "./EditPenNameDialog";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const UserDetailsBox = ({penName,setPenName, userEmail, setUserEmail}) => {
    const [open, setOpen] = useState(false);
    const [openPasswordChange, setOpenPasswordChange] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleManageSubscription = () => {
        navigate('/subscribe');
    };

    const handleOpenPasswordChange = () => {
        setOpenPasswordChange(true);
    };

    const handleClosePasswordChange = () => {
        setOpenPasswordChange(false);
    };

    const clearPasswordFields = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    };

    const handleChangePassword = () => {
            if (newPassword !== oldPassword){
                if(newPassword === confirmNewPassword){
                    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()])(?=.*[a-zA-Z]).{5,}$/;
                    if (passwordRegex.test(newPassword)) {
                        axios
                            .post("https://nomadic-pen.onrender.com/profile/changePassword", {
                                userEmail,
                                oldPassword,
                                newPassword,
                            })
                            .then((response) => {
                                if (response.status === 200) {
                                    alert("Password Successfully Updated. Redirecting to Login Page");
                                    handleClosePasswordChange();
                                    clearPasswordFields();
                                }
                            })
                            .catch((error) => {
                                alert(error.response.data.error);
                                console.error("Error updating password:", error);
                            });
                    }else {
                        alert("New password should be at least 5 characters long with one special character and one number.");
                        clearPasswordFields();
                    }
                }else{
                    alert("Confirmed password does not match new password");
                    clearPasswordFields();
                }
            }else{
                alert("New password is same as old password");
                clearPasswordFields();
            }
    };

    /* Mock data*/
    const subscriptionStatus = 'Subscribed';
    const twitterHandle = '@sreejithexample';
    const instagramHandle = '@sreejithNairexample';
    const facebookHandle = 'SreejithNairexample';

    return(
        <>
            <Box name="userDetailBox" sx={{width: 'fit-content',alignItems: 'left', flexDirection: 'column', gap: '100px',border: '1px solid black',padding: '5px', borderRadius: '4px', marginBottom: '50px',}}>
                {/* User Details */}
                <Typography>Email: {userEmail}</Typography>
                <Box name="penNameBox" sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ marginRight: '10px' }}>Pen Name: {penName}</Typography>
                    <MUI.Button  variant="contained" size="small" onClick={handleOpen}>Edit</MUI.Button>
                </Box>
                <Typography>Hobbies: Sketching, Photography, Travelling</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ marginRight: '10px' }}> Follow me  </Typography>
                    <a href={`https://twitter.com/${twitterHandle}`} target="_blank" rel="noopener noreferrer">
                        <TwitterIcon sx={{ color: '#1DA1F2' }} />
                    </a>
                    <a href={`https://www.instagram.com/${instagramHandle}`} target="_blank" rel="noopener noreferrer">
                        <InstagramIcon sx={{ color: '#E4405F' }} />
                    </a>
                    <a href={`https://www.facebook.com/${facebookHandle}`} target="_blank" rel="noopener noreferrer">
                        <FacebookIcon sx={{ color: '#4267B2' }} />
                    </a>
                </Box>
                <Typography>Visit my website: <a href="https://www.example.com">https://www.example.com</a></Typography>
                <EditPenNameDialog penName={penName} setPenName={setPenName} open={open} setOpen={setOpen} handleClose={handleClose}/>
                <Typography style={{ marginBottom: '10px' }}>
                    Subscription Status:{' '}
                    <span
                        style={{
                            display: 'inline-block',
                            padding: '0px 4px',
                            borderRadius: '5px',
                            border: '1px solid gold',
                            color: 'black',
                            backgroundColor: 'gold',
                        }}
                    >
                        {subscriptionStatus}
                    </span>
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <MUI.Button variant="contained" onClick={handleManageSubscription}>Manage Subscription</MUI.Button>
                    <MUI.Button variant="contained" onClick={handleOpenPasswordChange}>Change Password</MUI.Button>
                </Box>
                <Dialog open={openPasswordChange} onClose={handleClosePasswordChange}>
                    <DialogTitle sx={{padding: '16px', fontSize: '18px'}}>Password Change</DialogTitle>
                    <DialogContent className="password-change-form">
                        <TextField
                            label="Pen Name"
                            value={penName}
                            disabled
                        />
                        <TextField
                            label="Old Password"
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        <TextField
                            label="New Password"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <TextField
                            label="Confirm New Password"
                            type="password"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <MUI.Button variant="contained" onClick={handleClosePasswordChange}>Cancel</MUI.Button>
                        <MUI.Button variant="contained"onClick={handleChangePassword}>Confirm</MUI.Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    );
}
export default UserDetailsBox;