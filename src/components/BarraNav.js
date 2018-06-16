import React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Col, label, Button, ListGroup, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';


export default class BarraNav extends React.Component {

    constructor(props){
        super(props);
        //this.handleSelect = this.handleSelect.bind(this);
    }

    /*handleSelect(eventKey) {
        event.preventDefault();
        //alert(`selected ${eventKey}`);
        this.props.navControl(eventKey);

        // onSelect={k => this.handleSelect(k)}
    }*/

  render () {
    return (
      <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
      <Navbar inverse collapseOnSelect style={{height: "75px"}} >
          <Navbar.Header>
            <Navbar.Brand>
              <ul style={{listStyle: "none"}}>
                <li><a style={{color: "white", fontSize: "3vh",  marginLeft: "25px"}}>ICO FACTORY</a></li>
                <li><a style={{color: "white", fontSize: "1.75vh"}}>Created by SOFÍA VIDAL URRIZA</a></li>
              </ul>
            </Navbar.Brand>                    
          </Navbar.Header>
          <Navbar.Collapse>                    
            <Nav pullRight>
              <NavItem style={{color: "white", fontSize: "3vh",  marginLeft: "25px"}} >
                <Link to={'/'}>Home</Link>
              </NavItem>
              <NavItem style={{color: "white", fontSize: "3vh",  marginLeft: "25px"}} >
                  <Link to={'/about'}>About </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar></div>
    );        
  }
}