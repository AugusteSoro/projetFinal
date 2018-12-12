import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


export class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
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

      <nav id="navbarmenu" class="navbar navbar-light bg-light">
      <Link to='/dashboard'>
        <a class="navbar-brand" >Projet</a>
        </Link>

        <ul class="nav nav-pills">
          <NavItem class="nav-item">
          <Link to='/dashboard' class="nav-link">
              <NavLink>Accueil</NavLink>
          </Link>
          </NavItem>

          <NavItem class="nav-item">
          <Link to='/dashboard' class="nav-link">
              <NavLink>Ajout de volontaire</NavLink>
          </Link>
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
      </nav>

    

      
    );
  }
}

export default Menu;
