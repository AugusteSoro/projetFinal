import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ButtonDropdown,
  Card,
  CardBody,
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
  Alert,
  Container,
  Row,
} from 'reactstrap';

export class Ajout extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      };
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
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

    fermeturePop(value) {
      this.setState({
        etatfinal: value,
      });
    }



  submit() {
    console.log('SUBMIT');

    // Change value state dashboard
    this.setState({
      dashboard: true,
    });
    console.log(this.state.dashboard);


    console.log(this.state.email);
    console.log(this.state.password);
    // Initialisé l'objet user
    const user = {
      email: this.state.email,
      password: this.state.password

    };

    
    // POST
    axios.post('http://localhost:4000/volontaire', { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

      
  render() {
   return (
    <div>
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}> */}
        <Modal isOpen={this.props.action === true} toggle={this.toggle} className={this.props.className}>
        <Button color="danger" onClick={this.toggle2}>{this.props.buttonLabel}</Button> 

      <form onSubmit={() => {this.submit()}}>

          <ModalHeader toggle={this.toggle}>Ajouter un volontaire</ModalHeader>
          <ModalBody>

            

          {/* <button onClick={() => {this.submit()}}>Submit</button> */}
                <div className="form-group">
                <label htmlFor="email" className="sr-only">Adresse mail</label>
                <input type="email" className="form-control" value={this.state.email}  onChange={(event) => {this.updateEmail(event.target.value)}} placeholder="Email address"/>
                </div>

                <div className="form-group">
                <label htmlFor="password" className="sr-only">Mot de passe</label>
                <input type="password" className="form-control" value={this.state.password} onChange={(event) => {this.updatePassword(event.target.value)}} placeholder="Password"/>
                </div>
            

          

          </ModalBody>
          <ModalFooter>
          <input className="btn btn-primary btn-block" type="submit" value="Ajouter un volontaire"/>
            {/* <Button color="primary">Ajouter</Button> */}
            <Link to='/dashboard'>
            <Button color="secondary" onClick={(event) => {this.fermeturePop(false)}}>Annuler</Button>
            </Link>
          </ModalFooter>
        </form>
      </Modal>
    </div>
   );
  }
}

export default Ajout;
