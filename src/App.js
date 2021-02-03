import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import MenuAppBar from './components/AppBar';
import theme from './theme/theme';
import {ThemeProvider} from '@material-ui/core/styles'
import Registrarse from './components/Registrarse';
import Login from './components/Login';
import Container from '@material-ui/core/Container';
import Home from './components/Home';
import Contacto from './components/Contacto';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from "./components/Auth";
import Footer from './components/Footer';
import Mascotas from './components/Mascotas';
import Comida from './components/Comida';
import Bebidas from './components/Bebidas';
import Indumentaria from './components/Indumentaria';
import Reposteria from './components/Reposteria';
import Decoracion from './components/Decoracion';

const App = () => {
  return (<AuthProvider>
    <Router>
    <ThemeProvider theme={theme}>
    <div className="App"> 
             <MenuAppBar Link={Link}/>
             <Switch>
             <PrivateRoute path="/emprender/" exact component={Home} />
                 <Route path="/emprender/login" component={Login}/>
                 <Route path="/emprender/registrarse" component={Registrarse} />
                 <Route path="/emprender/contacto" component={Contacto} />
                 
                   <PrivateRoute path="/mascotas" component={Mascotas}/>
                   <PrivateRoute path="/comida" component={Comida}/>
                   <PrivateRoute path="/bebidas" component={Bebidas}/>
                   <PrivateRoute path="/indumentaria" component={Indumentaria}/>
                   <PrivateRoute path="/decoracion" component={Decoracion}/>
                   <PrivateRoute path="/reposteria" component={Reposteria}/>
      <Container maxWidth="sm">
      
                            </Container>
      
                       
                    </Switch>    
                   <Footer/> 
                    </div>
      </ThemeProvider>
      </Router>
      </AuthProvider>
  );
}
//  spa- single page app
export default App;
