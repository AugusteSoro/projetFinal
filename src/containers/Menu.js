import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter, } from 'reactstrap';
import { Link } from 'react-router-dom';
import Ajout from '../views/volontaire/Ajout.js';

import axios from 'axios';




export class Menu extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   etatpopup: false,
    //   etatfinal: false
    // };
    this.state = {
      collapsed: true,
      name: '',
      email: '',
      modal: false,
      visible: false,
      visibleError: false,
      username: JSON.parse(sessionStorage.getItem('dataUser')).username
      


    };
    // for popup
    this.toggle = this.toggle.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    
  }


  toggle() {
    console.log('toggle');
    this.setState({
      modal: !this.state.modal
    });
  }

  // Form ajout
  updateName(value) {
    this.setState({
      name: value,
    });
  }

  updateEmail(value) {
    this.setState({
      email: value,
    });
  }


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }



  submit() {
    console.log('SUBMIT');
    
    // Initialisé l'objet user
    const volontaire = {
      name: this.state.name,
      email: this.state.email,
      user_id: JSON.parse(sessionStorage.getItem('dataUser')).userid

    };
    
    // POST
    console.log('POST');
    console.log(volontaire);

     axios.post('http://localhost:3001/volontaire/add', volontaire)
     .then(res => {
       console.log(res);
       console.log(res.data);
       let status = res.status;
       switch (status) {
         case 201: {
          this.setState({
            visible: true,
          });
          // Fermer le pop
          this.toggle();
          break;
         }
         case 204: {
         console.log('No content');
          break;

        }
        default: {
          
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

  }



  render() {
    return (
      // <div className="container">
      //   <Navbar color="faded" light>
      //   <Link to="/">
      //     <NavbarBrand className="mr-auto">Projet ADEI</NavbarBrand>
      //     </Link>
      //     <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      //     <Collapse isOpen={!this.state.collapsed} navbar>
      //       <Nav navbar>
      //         <NavItem>
      //           <Link to='dashboard'>
      //             <NavLink>Dashboard</NavLink>
      //           </Link>
      //         </NavItem>
      //         <NavItem>
      //         <Link to='/historique'>
      //           <NavLink>Historique</NavLink>
      //           </Link>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
      //         </NavItem>
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
      //   <hr/>
      // </div>
<div>


      <nav id="navbarmenu" class="navbar navbar-light bg-light">
      <Link to='/dashboard'>
        <a class="navbar-brand" > {this.state.username}</a>
        </Link>

        <ul class="nav nav-pills">
          <NavItem class="nav-item">
          <Link to='/dashboard' class="nav-link">
              <NavLink>Accueil</NavLink>
          </Link>
          </NavItem>

          <NavItem class="nav-item">
            <div class="nav-link">
              {/* <button onClick={(event) => {this.updatePopup(true)}}>Ajout de volontaire</button> */}
              <button onClick={this.toggle}>Ajout de volontaire</button>

            </div>

          </NavItem>

          <NavItem class="nav-item">
          <Link to='/historique' class="nav-link">
              <NavLink>Historique</NavLink>
          </Link>
          </NavItem>

          <NavItem class="nav-item">
          <Link to='/login' class="nav-link">
              <NavLink>Deconnexion</NavLink>
          </Link>
          </NavItem>
          
        </ul>

          {/* Component ajout de volontaire */}
            {/* <Ajout action={this.state.etatfinal}/> */}


      </nav>

    


        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        {/* <Button color="danger" onClick={this.toggle2}>{this.props.buttonLabel}</Button>  */}

      <form onSubmit={() => {this.submit()}}>

          <ModalHeader toggle={this.toggle}>Ajouter un volontaire</ModalHeader>
          <ModalBody>

          <div className="form-group">
                <label htmlFor="text" className="sr-only">Nom complet</label>
                <input type="text" className="form-control" value={this.state.nom} onChange={(event) => {this.updateName(event.target.value)}} placeholder="Nom complet"/>
          </div>

          <div className="form-group">
                <label htmlFor="email" className="sr-only">Adresse mail</label>
                <input type="email" className="form-control" value={this.state.email}  onChange={(event) => {this.updateEmail(event.target.value)}} placeholder="Email address"/>
          </div>


          </ModalBody>
          <ModalFooter>
          <input className="btn btn-primary btn-block" type="submit" value="Ajouter un volontaire"/>
            {/* <Button color="primary">Ajouter</Button> */}
            <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>

      
    );
  }
}

export default Menu;
