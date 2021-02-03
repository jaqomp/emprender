import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import {db} from '../firebase';

function Copyright() {
  return (
    <Typography variant="body2" color="primary">
      {'Copyright © '}
      <Link color="primary" href="#">
        Jacqueline Paredes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',

    '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '25ch',
      },
      [theme.breakpoints.up('md')] : {
        minHeight: '30vh',
    }
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
    theme.palette.type === 'primary' ? theme.palette.purple : theme.palette.purple,
    color: 'purple',
  },
  containerFooter: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      [theme.breakpoints.up('md')] : {
        flexDirection: 'row',
    }
  },
  containerContacto: {
      marginTop: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
      justifyContent: 'center',
      [theme.breakpoints.up('md')] : {
        borderRight: '2px solid gray',
        margin: '30px 0 30px 0',
      },
  },
  iconoContacto: {
      marginRight: '5px',
  },

  containerRedSocial: {
      width: '100%',
    //   backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      color: 'gray',
  },
  tField: {
      color: 'white',
  },
  containerCopy: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '12px',
      alignItems: 'center',
      borderTop: '2px solid gray',
    
    },
    containerNewsletter: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerEmail: {
      display: 'flex',
      justifyContent: 'center',
    }

}));

export default function StickyFooter() {
  const classes = useStyles();
  const [email,setEmail] = useState('');

  const handleChangeEmail = (e) =>{
    setEmail(e.target.value)
  }

  const subirEmail = async (e) => {
    e.preventDefault();
    db.collection('newsletter').add({
        emailUsuario: email,     
    })
    setTimeout((function(){ window.location.replace("/login"); }), 1000)
  }

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container className= {classes.containerFooter}>

            <Container className={classes.containerContacto}>
                <Typography>Redes sociales</Typography>

                <Container className={classes.containerRedSocial}>
                    <FacebookIcon className={classes.iconoContacto} />
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className={classes.contactoLink}>Facebook</a>
                    
                </Container>

                <Container className={classes.containerRedSocial}>
                    <InstagramIcon className={classes.iconoContacto} />
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={classes.contactoLink}>Instagram</a>
                    
                </Container>
            </Container>

            

            <Container className={classes.containerContacto}>
                <Typography>Contacto</Typography>

                <Container className={classes.containerRedSocial}>
                    <PhoneIcon className={classes.iconoContacto} />
                    <Typography>(11) 25119829</Typography>
                </Container>

                <Container className={classes.containerRedSocial}>
                    <MailOutlineIcon className={classes.iconoContacto} />
                    <Typography>jacquelinep_@hotmail.com</Typography>
                </Container>
            </Container>
<form onSubmit={subirEmail}>
            <Container className={classes.containerNewsletter}>
                <Typography>Recibe recomendaciónes y acceso a sorteos!</Typography>
                <Container className={classes.containerEmail}>
                    <TextField
                    className={classes.tField}
                    id="outlined-uncontrolled"
                    label="Email"   
                    variant="outlined"
                    onChange={handleChangeEmail}
                    type="email" required
                    color="secondary"
                    />
                    <Button color='secondary' type="submit" className={classes.buttonEnviarEmail}>Enviar</Button>
                </Container>
                
            </Container>

            </form>
        </Container>
        
        <Container className={classes.containerCopy}>
            <Copyright/>
        </Container>
      </footer>
    </div>
  );
}

 