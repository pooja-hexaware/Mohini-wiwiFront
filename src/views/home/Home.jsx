import React, { useState, useEffect } from 'react'
import { styled } from '@mui/system'
import { SimpleCard } from 'components'
import { useSelector, } from 'react-redux'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import Dialog from '@material-ui/core/Dialog';

import ListItemButton from '@mui/material/ListItemButton';
//import Paper from 'material-ui/Paper';
import { makeStyles } from "@material-ui/core/styles";
import bgImg from "../../components/MatxLayout/Layout1/pic6.jpg"

const toppings = [
  'Oil',
  'Vinger',
  'Ranch',
  'Ketchap',
  'Sun dreied -tomoto']
  


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
  );

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
   
}))

// const Div= styled('div')(({theme}))({
//   backgroundImage: `url(${bgImg})`
// })

const useStyles = makeStyles((theme) => ({
  divImg: {
    backgroundImage: `url(${bgImg})`,
  },
}));
const Home = () => {
    const loading = useSelector((state) => state.loading);
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const [open1, setOpen1] = React.useState(false);
  
    const handleClickOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };
  
    const handleListItemClick = () => {
      handleClose();
    };
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    const classes = useStyles();
       
//const open = Boolean();
    return <div  className={classes.divImg} > 
      
       <Container>
       <Card style={{ width: '30rem', backgroundColor:'#538cc6',fontFamily:'Verdana',margin: '0 auto'} }>
      <CardContent>
        <Typography sx={{ fontSize: 18, fontWeight:'bold' ,paddingLeft:18}} color="#ffffff" >
         Good Food, Great time
                 
        </Typography>
        <div>
        <Typography sx={{ fontSize: 12 }} color="#ffffff" >
        Our checfs at wiwi prepare delicious food selection every week ,you pick
                 
        </Typography></div>
       
      </CardContent>
     
    </Card>
       
    </Container>
    <Container >
    <Box  sx={{
        width: 790,
        height: 300,margin: '0 auto'}}>
        <Card sx={{ minWidth: 40,height:410,margin: '0 auto'}}>
      <CardContent>
        <Typography sx={{ fontSize: 15, fontWeight:'bold'}} color="text.primary" gutterBottom>
        Loaded veggie 
        </Typography>
        <Typography sx={{ fontSize:10,fontStyle: 'italic'}} color="text.primary" gutterBottom>
        Sweet potatoes,brown rice,pinto beans,green chilli queso 
        </Typography>
       </CardContent>
      <CardActions>
      <Typography sx={{ fontSize: 13, fontWeight:'bold'}} color="#e60000" gutterBottom>
      $22.19
      </Typography>
      <div>
       <Button variant="contained" size="small"onClick={handleClickOpen}>
          +topping
        </Button>
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
        </div>
        <Box  paddingLeft={60}>
          <div>
            <Typography sx={{ fontSize: 10, fontWeight:'bold'}} color="text.primary" gutterBottom>
       Amount 
        </Typography>
         <TextField
        InputProps={{ sx: { height: 26 ,width:62, marginBottom:1} }}  
/>          </div>
        <Button variant="contained" size="small" onClick={handleClickOpen1}>
          +Add
        </Button>
        <div>
               
        <Dialog sx={{
        
        maxWidth:"md",
        height: 500,margin: '0 auto'}}
                open={open1}
                onClose={handleClose1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
              <div>
        <Typography sx={{ fontSize: 20, fontWeight:'bold' }} color="text.primary" gutterBottom>
       Loaded Veggie 
        </Typography>
        <Button variant="contained" size="small" >
          +
        </Button>
        <Button variant="contained" size="small" >
          -
        </Button>
        </div>
        <div>
        <Typography sx={{ fontSize: 10, fontWeight:'bold'}} color="text.primary" gutterBottom>
       Total Amount
        </Typography>
       
        <div>
        <Button variant="contained" size="small" >
          Validate Coupon
        </Button>
        <TextField
        InputProps={{ sx: { height: 26 ,width:62, marginBottom:1} }}  
        />
        </div>
        <Button varia                             nt="contained" size="small" >
          Order
        </Button>
        </div>
             <div
        style={{
          background: '#E8E8E8',
          height: '3px',
          marginLeft:19,marginRight:19
        }}
      />        
        
            </Dialog>
        </div>


        </Box>
         </CardActions>
      <div
        style={{
          background: '#E8E8E8',
          height: '1px',
          marginLeft:19,marginRight:19
        }}
      />
       <CardContent>
        <Typography sx={{ fontSize: 15, fontWeight:'bold'}} color="text.primary" gutterBottom>
        Hummus Falafel 
        </Typography>
        <Typography sx={{ fontSize: 10,fontStyle: 'italic'}} color="text.primary" gutterBottom>
        Sweet potatoes,brown rice,pinto beans,green chilli queso 
        </Typography>
       </CardContent>
      <CardActions>
      <Typography sx={{ fontSize: 13, fontWeight:'bold'}} color="#e60000" gutterBottom>
      $22.19 
      </Typography>
        <Button variant="contained" size="small"paddingLeft="11">
          +topping
        </Button>
        <Box  paddingLeft={60}>
        <div><Typography sx={{ fontSize: 10}} color="text.primary" gutterBottom>
       Amount 
        </Typography>
        <TextField
        InputProps={{ sx: { height: 26 ,width:62, marginBottom:1} }}  
        />
          </div>
         
        <Button variant="contained" size="small">
          +Add
        </Button>
        </Box>
      </CardActions>
      <div
        style={{
          background: '#E8E8E8',
          height: '1px',
          marginLeft:19,marginRight:19
        }}
      />
    </Card>
        </Box> </Container></div>
}

export default Home
