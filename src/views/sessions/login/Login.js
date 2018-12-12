import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  Container,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

import axios from 'axios';

export class Login extends Component {
 
   constructor(props) {
     super(props);
     this.state = {
       email: '',
       password: ''
     };
     this.handleChange = this.handleChange.bind(this);
     this.verifyUser = this.verifyUser.bind(this);
   }


  // handleChange(event) {
  //   this.setState({email: event.target.email, password: event.target.password});
  // }

   verifyUser(event) {

     console.log('state');
     console.log(this.state.email);
     console.log('BEGIN');
     const user = {
       email: this.state.email,
       password: this.state.password

     };
     event.preventDefault();

     console.log('users');
     console.log(user);


     // POST
     axios.post('http://localhost:4000/login', { user })
       .then(res => {
         console.log(res);
         console.log(res.data);
       })

   }


  handleChange(event) {
    // this.setState({value: event.target.value});
    this.setState({ [event.target.name]: event.target.value });

  }

  handleSubmit(event) {
     console.log('state');
        console.log(this.state.email);
        console.log('BEGIN');
        const user = {
          email: this.state.email,
          // password: this.state.password
  
        };
        event.preventDefault();
  
        console.log('users');
        console.log(user);
  
  
        // POST
        axios.post('http://localhost:4000/login', { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
    event.preventDefault();
  }
  
  

  render() {
   return (
     <div className="app flex-row align-items-center">
     <Container>
       <Row className="justify-content-center">
           <Col xs="12" sm="6">
           <Card>
               <CardHeader>
                 <strong>LOGIN</strong>
                 <small> Connexion</small>
               </CardHeader>
               <CardBody>

     <form onSubmit={this.verifyUser}>
        <div>
            <div className="form-group">
            <label htmlFor="email" className="sr-only">Adresse mail</label>
            <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="Email address"/>
            </div>

            <div className="form-group">
            <label htmlFor="password" className="sr-only">Mot de passe</label>
            <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
            </div>

            <div className="checkbox mb-3">
           
            <label>
                <input type="checkbox" name="remember"/> Restez connecter
            </label>

            </div>
            <input className="btn btn-primary btn-block" type="submit" value="Connexion"/>
            <hr />
            <Link to="/register">
            <div className="text-center">Inscription</div>
            </Link>
            <p className="mt-5 mb-3 text-muted text-center">&copy; Adei Elevate 2018</p>
        </div>
     </form>

     </CardBody>
     </Card>

           </Col>
           </Row>

     </Container>

         </div>

   );
  }
}

export default Login;
