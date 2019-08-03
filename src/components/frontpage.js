import React, { Component, } from 'react';
import {
    Tabs, Tab, Col, Row, Navbar, Button,
    Nav, Form, FormControl, Card,
    DropdownButton, Dropdown, Alert,
    ListGroup, ListGroupItem, Container,
    Jumbotron, Badge
} from 'react-bootstrap';
import Carousell from "./web/carousel";
import Cards from "./web/card";
import Jumbotronn from "./web/jumbotron";
import FooterPage from "./web/footer";
import customHistory from './history'
import StudentLogin from './web/studentLogin'
import TeacherLogin from './web/teacherLogin'
import Logo from "../components/web/img/courthouse.png";
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';

class Frontpage extends Component {
    render() {
        return (

            <div style={{backgroundColor: '#f7f7f7'}} >
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand  style={{display:'flex',flexDirection:'row',verticalAlign:'center', }}>
      <img
        style={{paddingTop:10,borderRadius:20, backgroundColor:'rgba(219, 219, 219,1)'}}
        src={Logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      <p style={{paddingLeft:10,paddingTop:12}}>UBIT Portal</p>
    </Navbar.Brand>
                    {/* <Navbar.Brand>UBIT Portal</Navbar.Brand> */}
                    <div style={{flex:1, display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'space-between',}}>

                        <div style={{ display:'flex', flexDirection:'row'}}>
                            <Nav className="nav-link"><Link to={'/'} className="nav-link"> Home </Link></Nav>
                            <Nav className="nav-link"><Link to={'/faculty'} className="nav-link"> Faculty </Link></Nav>
                            <Nav className="nav-link"><Link to={'/admission'} className="nav-link"> Admission </Link></Nav>
                            <Nav className="nav-link"><Link to={'/aboutus'} className="nav-link"> AboutUs </Link></Nav>

                        </div>
                        <div style={{ display:'flex', flexDirection:'row'}}>
                            <Nav className="nav-link"><Link to={'/studentlogin'} className="nav-link"> Student Login </Link></Nav>
                            <Nav className="nav-link"><Link to={'/teacherlogin'} className="nav-link"> Teacher Login </Link></Nav>
                        </div>
                    </div>
                </Navbar>

                <Carousell />
                <Cards />
                <Jumbotronn />
                <FooterPage />
            </div>



        )
    }
}

export default Frontpage;
