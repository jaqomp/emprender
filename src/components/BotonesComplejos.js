import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import accesorios from './imagenes/accesorios.jpg';
import paelladepollo from './imagenes/paelladepollo.jpg';
import bebidas from './imagenes/bebidas.jpg';
import cuadros from './imagenes/cuadros.jpg';
import ropa from './imagenes/ropa.jpg';
import tortas from './imagenes/tortas.jpg';
import {Link} from 'react-router-dom';


const images = [
  {
    
    url: `${accesorios}`,
    title: 'Mascotas',
    width: '40%',
    link: '/mascotas',
    
  },
  {
    url: `${paelladepollo}`,
    title: 'Comida',
    width: '40%',
    link: '/comida',
  },
  {
    url: `${bebidas}`,
    title: 'Bebidas',
    width: '40%',
    link: '/bebidas',
  },
  {
    url: `${cuadros}`,
    title: 'Decoración',
    width: '40%',
    link: '/decoracion',
  },
  {
    url: `${ropa}`,
    title: 'Indumentaria',
    width: '40%',
    link: '/indumentaria',
  },
  {
    url: `${tortas}`,
    title: 'Repostería',
    width: '40%',
    link: '/reposteria',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 650,
    width: '100%',
    
    
  },
  image: {
    position: 'relative',
    height: 250,
    margin: '10px',
    [theme.breakpoints.down('xs')]: {
      width: '60% !important', // Overrides inline-style
      height: 100,
    },
    [theme.breakpoints.down('xm')]: {
      width: '60% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
   
    <div className={classes.root}>
      
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <Link to ={image.link}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </Link>
        </ButtonBase>
      ))}
    </div>
  );
}
