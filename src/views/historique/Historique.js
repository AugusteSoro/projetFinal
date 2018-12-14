import React, { Component } from 'react';
import { Tracker } from './Tracker.js'

import { Link } from 'react-router-dom';

import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardFooter,
  Alert,
  CardHeader,
  CardGroup,
  CardImg,
  CardSubtitle,
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


export class Historique extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      fadeIn: true,
      volontaire: [],
      visible: false,
      visibleError: false

    };
    this.toggle = this.toggle.bind(this);
}

toggle() {
  this.setState({
      fadeIn: !this.state.fadeIn
      
  });
}

componentWillMount() {
  this.getHisto();
}

getHisto() {
  console.log('get historique');

   axios.get('http://localhost:3001/volontaire/')
   .then(res => {
     console.log(res);
    //  console.log(res.data);
     let status = res.status;
     switch (status) {
       case 200: {
         // Remplir le tableau
        const volontaire = res.data;
        this.setState({ volontaire: volontaire });
        console.log('*************************');

        console.log(volontaire);

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

}

  render() {
   

        
    if (this.state.volontaire) {
      console.log("BEGIN");                 


       {/* <h1>{this.state.volontaire}</h1> */}
       {this.state.volontaire.map((obj, i) => {     
           console.log("Entered");  
           const a =  "<div>Bonjour</div>"
            
           // Return the element. Also pass key     
          //  return (<Answer key={i} answer={answer} />) 
          return ( 
            <div>
              {a}

            <CardGroup>
          <Card body outline color="primary" style={{ backgroundColor: '##3c3ca6' }}>
            {/* <CardBody onClick={this.toggle}> */}
            <CardBody>

              <CardTitle> ddddddddddddddd  </CardTitle>
              <CardSubtitle>{obj.email}</CardSubtitle>
              {/* <CardText>{element.email}</CardText> */}
            </CardBody>

              {/* <Fade in={this.state.fadeIn} tag="h5" className="mt-3"> */}
              <Fade tag="h5" className="mt-3">

              <CardFooter>
                  {/* Afficher tracker */}
                    <Tracker />
              </CardFooter>
            </Fade>
          </Card>

    </CardGroup>
    </div>

            ) 

        })
    }




    }
















    // if (!this.state.volontaire) {
    //   var array = [];
    //   const arr = this.state.volontaire;

    //   arr.forEach(function(element) {

    //     array.push(
    //     <div className="app flex-row align-items-center">
    //     <div className="container">
    //      <CardGroup>
    //       <Card body outline color="primary" style={{ backgroundColor: '#f7f7f7' }}>
    //         <CardBody>

    //           <CardTitle>{element.name}  </CardTitle>
    //           <CardSubtitle>{element.email}</CardSubtitle>
    //         </CardBody>

    //           <Fade tag="h5" className="mt-3">

    //           <CardFooter>
    //                 <Tracker />
    //           </CardFooter>
    //         </Fade>
    //       </Card>

    // </CardGroup>
    // </div>
    // </div>);
    // });
    //   return array;
    // }
    


   return (
    <div className="app flex-row align-items-center">
        <div className="container">

        <Alert color="danger" className="align-items-center" isOpen={this.state.visible} toggle={this.onDismiss}>
        Aucun volontaire trouvé
      </Alert>

      <Alert color="danger" className="align-items-center" isOpen={this.state.visibleError} toggle={this.onDismiss}>
        Une erreur est survenue
      </Alert>

      <CardGroup>

      <Card body outline color="primary" style={{ backgroundColor: '#f7f7f7' }}>
        <CardBody onClick={this.toggle}>
          <CardTitle>Nom</CardTitle>
          <CardSubtitle>email</CardSubtitle>
          <CardText>email</CardText>
            
        </CardBody>

          <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
          <CardFooter>


                <Tracker />

                </CardFooter>

        </Fade>

      </Card>

      
    </CardGroup>

    </div>
    </div>


   );


  }
}

export default Historique;
