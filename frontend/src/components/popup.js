import React from 'react';
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';

export default function Popup(props){
    const{title, children, openPopup, popupIsOpen} = props;

    return(
        <Dialog open={openPopup}>
            <DialogTitle className='dialogTitle'>
                <div style={{display:'flex'}}>
                    <Typography variant="h6" component="div" style={{flexGrow:1}}>
                        {title}
                    </Typography>
                    <div>
                        <Button variant="danger" size="sm" onClick={()=>{popupIsOpen(false)}}>X</Button>
                    </div>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}