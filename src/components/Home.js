import React from 'react';
import {authentication} from '../firebase';
import Container from '@material-ui/core/Container';
import BotonesComplejos from './BotonesComplejos';
import Grid from '@material-ui/core/Grid';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    
   home:{[theme.breakpoints.down('sm')]: {
    TextAlign: 'left',
    fontSize: '1em',
    justify:"left",
  alignItems:"left",
    
  },
  [theme.breakpoints.down('xs')]: {
    TextAlign: 'left',
    fontSize: '1em',
    justify:"left",
  alignItems:"left",
  },

   }
  }));

const Home = () => {
    const classes = useStyles();
    
    return ( 
        <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>

           <div className="cerrar"> <button className= {classes.cerrar}  onClick={() => authentication.signOut()}>Cerrar sesión</button> </div>
           <Grid item sm={12} className={classes.home} >
          <h1 className="bienvenido">Bienvenido a nuestra APP!
        </h1>
        
         <h3 className="zona">Aquí encontrarás a los mejores emprendimientos de Zona Oeste. </h3>
        </Grid>
<Container className="home" component="main" maxWidth="xs">
<h2 className="categoria"  >Escoge una categoría:</h2>
<br/>
<BotonesComplejos/>


            </Container>
            
         </Grid>
     );
}

export default Home;