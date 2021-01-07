import React, {useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';

import {db} from '../firebase';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'firebase/firestore';
import Rating from '@material-ui/lab/Rating';
import Comentar from './Comentar';
import Comentarios from './Comentarios';
import {authentication} from '../firebase';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  containerTiendas: {
    display:'flex',
    justifyContent:'center',
  }
}));

 
const Reposteria = () => {
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const classes = useStyles();

const [rating,setRating] = useState(0);
const [tiendas, setTiendas] = useState([]);
    
    useEffect(() => {
        return db.collection("tiendas").where("categoria", "==", "reposteria")
        .onSnapshot((snapshot)=>{
          const data = [];
          snapshot.forEach((doc)=>{
            data.push({...doc.data(), id: doc.id});
          })
          setTiendas([...data])
        })
   

    },[tiendas]); 
    const ListaTiendas = tiendas.length ? tiendas.map((tienda, index)=>{ 
      return (

              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={tienda.img}
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {tienda.nombre}
                    </Typography>
                    <Typography>
                      {tienda.descripcion} 
                    </Typography>
                    <Typography>
                      {tienda.direccion} 
                    </Typography>
                    <Typography>
                      {tienda.telefono} 
                    </Typography>
                    <Typography>
                      {tienda.horarios} 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <div className="rating">    <Rating value={rating} name="stars" precision={0.5} onChange={(e,value) => setRating(value)}/></div>
                    <Comentar tiendaKey={tienda.id}/><Comentarios tiendaKey={tienda.id}/> 
                  </CardActions>
                </Card>
              </Grid>
       
      );
     
    }):
  <div></div>;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}> <div className="cerrarsesion"> <button className= {classes.root} onClick={() => authentication.signOut()}>Cerrar sesión</button> </div>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Repostería
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Apoya a los pequeños emprendimientos! 
            
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
               
              </Grid>
            </div>
          </Container> 
        </div>
       </main>
    <Grid className={classes.containerTiendas}container spacing={3}>{ListaTiendas}</Grid>
     </React.Fragment>
) 
}
  export default Reposteria;