import React, {useState, useEffect} from 'react';
import {db} from '../firebase';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';
import { FormControl, Grid, TextField } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles ({
    blackbutton:{
        color: 'black'
    },
    title:{
      textAlign: 'center',
    }
})



export default function AlertDialog({tiendaKey}) {
    const style = useStyles();

  const [open, setOpen] = React.useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [comentarioUsuario, setComentarioUsuario] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  useEffect(()=>{
    return db.collection('comentarios')
    .onSnapshot((snapshot)=>{
      const data = [];
          snapshot.forEach((doc)=>{
            data.push(doc.data());
          })
          setComentarios([...data])
    })
  }, [])

  function nuevoComentario(){
    db.collection('comentarios').add({
        id: tiendaKey,
        usuario: nombreUsuario,
        comentario: comentarioUsuario,
    })
    alert('Comentario Guardado');
  }


  return (
    <div>
      <Button classes={{root:style.blackbutton}} onClick={handleClickOpen}>
        Comentar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        comentarios={comentarios}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" classes={{root:style.title}}>Agregar Comentario</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container>
              <Grid item md={12}>
                  <FormControl>
                      <InputLabel htmlFor="nombre">Nombre:</InputLabel>
                      <Input id="nombre" aria-describedby="nombre-helper" 
                      onChange={(e) => {setNombreUsuario(e.target.value)}}
                      />
                  </FormControl>
              </Grid>
              <Grid item md={12}>
                  <TextField
                  id="standard-multiline-static"
                  label="Comente su experiencia:"
                  multiline
                  rows={2}
                  defaultValue=""
                  onChange={(e) => {setComentarioUsuario(e.target.value)}}
                  />
              </Grid>
          </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button classes={{root:style.blackbutton}} onClick={nuevoComentario} >
            Comentar
          </Button>
          <Button classes={{root:style.blackbutton}} onClick={handleClose} >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
