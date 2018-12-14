import React, { Component } from 'react';
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


export class Tracker extends Component {

  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
}

toggle() {
  this.setState({
      fadeIn: !this.state.fadeIn
  });
}

  render() {
   return (
    <div className="app flex-row align-items-center" onClick={this.toggle}>
        <div className="container">

          <div class="accordion shadow-sm" id="trackers-accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-tracker" aria-expanded="true" aria-controls="collapse-tracker">
                    Tracking du 2018/12/25
                  </button>
                </h5>
              </div>

              <div id="collapse-tracker" class="collapse" aria-labelledby="headingOne" data-parent="#trackers-accordion">
                <div class="card-body">
                  
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>

   );
  }
}

export default Tracker;
