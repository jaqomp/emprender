 import React from 'react';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }
  
  render() {
    const { status } = this.state;
    
    return (
        <Container className={Container} component="main" maxWidth="xs" >
          <Grid container>
            <Grid item> 
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mrgoblee"
        method="POST"
        id="fs-frm"
      >
        <label>Nombres:</label>
        <input type="text" name="nombres" />
        <label>Apellidos:</label>
        <input type="text" name="apellidos" />
        <label>Email:</label>
        <input type="email" name="email" />
        
        <label>Escribe tu mensaje:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? <p>Gracias!</p> : <button id="contactoEnviar">ENVIAR</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </Grid>
      </Grid>
      </Container>
    );
  }


  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
