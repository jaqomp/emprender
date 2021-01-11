import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';


const useStyles = makeStyles((theme) => ({
  root: {display: 'flex',
  
    flexGrow: 1,
    [theme.breakpoints.down('sm' ,'xs')]: {
      flexGrow: 1,
      
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      minHeight: 150,
     
      
    },
    minHeight: 200,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    
  },
  
icono:{
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '0',
    height: '3rem',
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: '0',
    height: '1.5rem',
    
  },
},

// buscador: {
//   [theme.breakpoints.down('xs' ,'sm')]: {
//   paddingLeft: '30rem',
//   Height: '2rem',
// },
// paddingTop: '10rem',

// },
  
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '3em', 
      
      paddingLeft: '1',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em', 
      paddingLeft:'0',
      paddingBottom: '50',
      
      
    },
    
    flexGrow: 1,
    alignSelf: 'flex-end',
    color: 'white',
    padding: 20,
    paddingLeft: 200,
  },
}));

export default function MenuAppBar({Link}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <div className={classes.root}>
      <AppBar position="static" >
      <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start" onClick={handleClick}
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer">
              
            <MenuIcon />
            
          </IconButton>
          <Typography className={classes.title}   align="center"  variant="h1" noWrap>
          <WbIncandescentIcon className={classes.icono} color="secondary"   style={{ fontSize: 80,  } }/> <b>EMPRENDER </b>
          </Typography>
          {/* <div className={classes.buscador}>
          <input type="text" id="formulario" class="form-control" ></input>
          <IconButton className={classes.busqueda} aria-label="search" color="inherit" >
            <SearchIcon />
            </IconButton></div> */}
            
            <IconButton aria-label="display more actions" edge="end" color="inherit">
            <MoreIcon />
          </IconButton> 
          
          
          
          { (
            <div>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/emprender">Home</Link></MenuItem>
            
            <MenuItem onClick={handleClose}><Link to="/registrarse">Registrarse</Link></MenuItem>
            
            <MenuItem onClick={handleClose}><Link to="/contacto">Contacto</Link></MenuItem>
              </Menu>
            </div>
   )}
   </Toolbar>
 </AppBar>
</div>
);





}

