import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function DialogTest() {

      return (
        <div>
        <Dialog
             open={open}
             onClose={handleClose}
             aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description"
         >
             
            
             <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
   {toppings.map((value) => {
     const labelId = `checkbox-list-secondary-label-${value}`;
     return (
       <ListItem
         key={value}
         secondaryAction={
           <Checkbox
             edge="end"
             onChange={handleToggle(value)}
           //  checked={checked.indexOf(value) !== -1}
             inputProps={{ 'aria-labelledby': labelId }}
           />
         }
         disablePadding
       >
         <ListItemButton>
           <ListItemAvatar>
             {/* <Avatar
             alt={`Avatar n°${value + 1}`}
              src={`/static/images/avatar/${value + 1}.jpg`}
               
             /> */}
                <Avatar >
             <PersonIcon />
           </Avatar>
           </ListItemAvatar>
           <ListItemText id={labelId} primary={` ${value }`} />
         </ListItemButton>
       </ListItem>
     );
   })}
 </List>  {/* <DialogActions>
                 <button onClick={handleClose} color="primary">
                     Disagree
                 </button>
                 <button onClick={handleClose} color="primary" autoFocus>
                     Agree
                 </button>
             </DialogActions> */}
         </Dialog>
     </div>
    )};
