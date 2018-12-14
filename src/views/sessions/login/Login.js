import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
  Alert
} from 'reactstrap';

import axios from 'axios';

export class Login extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
      // acceptedTerms: false,
      email: '',
      password: '',
      dashboard: false,
      visible: false,
      visibleError: false
    };
  }

  componentWillMount() {
    sessionStorage.removeItem('dataUser');

  }

  updatePassword(value) {
    this.setState({
      password: value,
    });
  }

  updateEmail(value) {
    this.setState({
      email: value,
    });
  }



  submit() {
    console.log('SUBMIT');
    
    // Initialisé l'objet user
    const user = {
      email: this.state.email,
      password: this.state.password

    };
    
    // POST
    console.log('POST');
    console.log(user);

     axios.post('http://localhost:3001/login', user)
     .then(res => {
       console.log(res);
       console.log(res.data);
       let status = res.status;
       switch (status) {
         case 200: {
           // Remplir sessionstorage
          // setter
          sessionStorage.setItem('dataUser', JSON.stringify({ username: res.data.name, userid: res.data.id } ) );
          console.log('dataUser');
          console.log(sessionStorage.getItem('dataUser'));
          
          this.setState({
            visible: true,
          });
          // Change value state dashboard
          this.setState({
            dashboard: true,
          });
          break;
         }
         case 204: {
          this.setState({
            visible: true,
          });
          break;

        }
        default: {
          this.setState({
            visible: true,
          });
          break;
        }
         
       }
     }, err => {
      let status = err.status;
      switch (status) {
        case 400: {
         this.setState({
           visibleError: true,
         });
         break;
        }
        case 500: {
         this.setState({
          visibleError: true,
         });
         break;

       }
       default: {
         this.setState({
          visibleError: true,
         });
         break;
       }
        
      }

     })


    // axios.get('http://localhost:3001/')
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }

  
  

  render() {
     if (this.state.dashboard){
       return <Redirect to='/dashboard'/>
  
     }
   return (
    // <div>

    //   <div dangerouslySetInnerHTML={{__html: this.state.dashboard}}/>
    
    


       <div className="app flex-row align-items-center">

       <Alert color="danger" className="align-items-center" isOpen={this.state.visible} toggle={this.onDismiss}>
        Email ou mot de passe incorrect
      </Alert>

      <Alert color="danger" className="align-items-center" isOpen={this.state.visibleError} toggle={this.onDismiss}>
        Une erreur est survenue
      </Alert>

       <Container>
         <Row className="justify-content-center">
             <Col xs="12" sm="6">
             <Card>
                 <CardHeader>
                   <strong>LOGIN</strong>
                   <small> Connexion</small>
                 </CardHeader>
                 <CardBody>

       <form onSubmit={() => {this.submit()}}>
          
      
        {/* <button onClick={() => {this.submit()}}>Submit</button> */}
              <div className="form-group">
              <label htmlFor="email" className="sr-only">Adresse mail</label>
              <input type="email" className="form-control" value={this.state.email}  onChange={(event) => {this.updateEmail(event.target.value)}} placeholder="Email address"/>
              </div>

              <div className="form-group">
              <label htmlFor="password" className="sr-only">Mot de passe</label>
              <input type="password" className="form-control" value={this.state.password} onChange={(event) => {this.updatePassword(event.target.value)}} placeholder="Password"/>
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
