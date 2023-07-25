import React, {useState} from 'react';
import * as MUI from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Typography } from '@mui/material';

const EditPenNameDialog = ({ penName,setPenName,open,setOpen,handleClose}) => {
    const [newPenName, setNewPenName] = useState('');
    const [isPenNameTaken, setIsPenNameTaken] = useState(false);
    const takenPenNames = ['@JohnDoe', '@Sreejith'];

    const handleUpdatePenName = () => {
        if (takenPenNames.includes(newPenName)) {
            setIsPenNameTaken(true);
        } else {
            setPenName(newPenName);
            handleClose();
            setIsPenNameTaken(false);
        }
    };
    return (
        <>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle sx={{padding: '16px', fontSize: '18px', backgroundColor: 'black', color: 'white' }}>Update Pen Name</DialogTitle>
                <DialogContent className="password-change-form" sx={{ padding: '16px', fontSize: '14px' }}>
                    <TextField
                        label="Current Pen Name"
                        value={penName}
                        disabled
                    />
                    <TextField
                        label="New Pen Name"
                        value={newPenName}
                        onChange={(e) => setNewPenName(e.target.value)}
                    />
                    {isPenNameTaken && <Typography variant="caption" color="error">Pen name is already taken.</Typography>}
                </DialogContent>
                <DialogActions>
                    <MUI.Button className="my-button" style={{ color: 'white', backgroundColor: 'black' }} onClick={handleClose}>Cancel</MUI.Button>
                    <MUI.Button className="my-button" style={{ color: 'white', backgroundColor: 'black' }} onClick={handleUpdatePenName}>Update</MUI.Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default EditPenNameDialog;

