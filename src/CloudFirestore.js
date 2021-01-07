import React, {useState,useEffect} from 'react';
import {db} from './firebase';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import {CardActionArea} from '@material-ui/core'
import 'firebase/firestore';

const useStyles = makeStyles(()=>({
    media:{
        height: 250

    },
    Card:{
        width: '200px'
    }
}))
const CloudFirestore = () => {
  const classes = useStyles()

    const [tiendas, setTiendas] = useState([]);
    
    
  
    useEffect(() => {
        return db.collection("tiendas").where("categoria", "==", "comida")
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
        
            <Grid item xs={12} sm={6} md={4} >
            <Grid container className={classes.gridContainer}>
                <Card className={classes.Card}>
                <Typography gutterBottom component="h2">
                                {tienda.descripcion} 
                            </Typography>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={tienda.img}
                        />
                        <CardContent>

                        </CardContent>
                    </CardActionArea>
                   
                  </Card>
                </Grid>
            </Grid>
    ) 
}) : <div><h3>No hay desaparecidos cargados</h3> 
</div>
return (
    <>{ListaTiendas}</>
) 
}   
export default CloudFirestore;       
  

 
    
