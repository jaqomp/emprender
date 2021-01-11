import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {db} from '../firebase';


export default function ScrollDialog({tiendaKey}) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [comentarios, setComentarios] = useState([]);

  const filterComentarios = ((data) => {
     
    return data.filter (comentario => comentario.id === tiendaKey)
  });

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]); 

  useEffect(()=>{
    
    return db.collection('comentarios')
    .onSnapshot((snapshot)=>{
      const data = [];
          snapshot.forEach((doc)=>{
            data.push(doc.data());
          })
          setComentarios(filterComentarios(data))
    })
  }, [filterComentarios])

  const listaComentarios = comentarios.length? comentarios.map((coment, index)=>{
    return (
      <ul key={index}>
        <h3>{coment.usuario}</h3>
        <li>
          {coment.comentario}
        </li>
      </ul> )
  })  :  <p>No hay comentarios</p>;
  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>Comentarios</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        comentarios={comentarios}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Comentarios de usuarios:</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {listaComentarios}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}