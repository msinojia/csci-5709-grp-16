import React, { useState, useRef} from 'react';
import * as MUI from '@mui/material';
import '../../styles/ProfilePage.css';
import { Box, Typography, Grid} from '@mui/material';
import ArticleBox from "./ArticleBox";
import UserDetailsBox from "./UserDetails";

const ProfilePage = () => {
    const [profilePicture, setProfilePicture] = useState('/assets/profile-page/profile-photos/dummy_dp.jpg');
    const fileInputRef = useRef(null);
    const [penName, setPenName] = useState('@Xcalibur11');

    const handleProfilePictureChange = () => {
        fileInputRef.current.click();
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
        }
    };

    /* Mock data*/
    const totalPosts = 10;
    const followers = 999;
    const following = 120;


    return (
        <div>
            <Box name="mainBox" sx={{display: 'flex',marginTop: '8px' }}>
                <Grid container spacing={2} sx={{ gap: 1 }}>
                    <Grid name="grid1" item xs={12} sm={2} md={2} style={{ display: 'inline-block', justifyContent: 'center', maxWidth: '100%', width: '350px' }}>
                        <Box name="detailsBox" sx={{width: 'fit-content', flexDirection: 'column', display: 'flex', gap: '0px', backgroundColor: '#ffff', alignItems: 'center' }}>
                            <Box name="profilePictureBox" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', backgroundColor: '#ffff', padding: '20px', border: '2px solid #ffff' }}>
                                <Box sx={{width: '300px', height: '300px', borderRadius: '10px', overflow: 'hidden',boxShadow: '15px 20px 20px -10px rgba(0, 0, 0, 10)',}}>
                                    <img src={profilePicture} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </Box>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <input type="file" accept="image/*" onChange={handleFileInputChange} ref={fileInputRef} style={{ display: 'none' }}/>
                                    <MUI.Button variant="contained" size="small" onClick={handleProfilePictureChange}>Change Picture</MUI.Button>
                                </div>
                            </Box>
                            <UserDetailsBox penName={penName} setPenName={setPenName}/>
                        </Box>
                    </Grid>
                    <Grid name="grid2" item xs={12} sm={6} md={9} sx={{flex: '1 1 auto', width: '100%', display: 'flex', flexDirection: 'column'}}>
                        <Box name="bannerBox" sx={{ flex: 1, flexDirection: 'column', display: 'flex', marginLeft: '20px', marginRight: '20px'}}>
                            <Box name="featureBox" sx={{ height: '180px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffff' }}>
                                <div>
                                    <h1 style={{ margin: 0 }}>Sreejith Nair</h1>
                                    <h3 style={{ margin: 0 }}>Software Developer | {penName}</h3>
                                </div>
                                <Box name="followerBox" sx={{ display: 'flex'}}>
                                    <Box sx={{ textAlign: 'center', marginRight: '10px',border: '1px solid black', borderRadius: '12px',padding: '5px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 4)', }}>
                                        <Typography variant="h6">{totalPosts}</Typography>
                                        <Typography variant="subtitle1">Posts</Typography>
                                    </Box>
                                    {/* Followers */}
                                    <Box sx={{ textAlign: 'center', marginRight: '10px',border: '1px solid black', borderRadius: '12px',padding: '5px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 4)',}}>
                                        <Typography variant="h6">{followers}</Typography>
                                        <Typography variant="subtitle1">Followers</Typography>
                                    </Box>
                                    {/* Following */}
                                    <Box sx={{ textAlign: 'center',border: '1px solid black', borderRadius: '12px',padding: '5px', boxShadow: '2px 4px 8px rgba(0, 0, 0, 4)', }}>
                                        <Typography variant="h6">{following}</Typography>
                                        <Typography variant="subtitle1">Following</Typography>
                                    </Box>
                                </Box>
                            </Box>
                            {/* Articles */}
                            <ArticleBox/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default ProfilePage;