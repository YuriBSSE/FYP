import React, { Component } from 'react';
import firebase from '../../config/firebase'
import '../../styles/App.css'
import { Navbar, Nav } from 'react-bootstrap';
import { Route, NavLink, Link, BrowserRouter as Router } from 'react-router-dom'
import Logo from "./img/courthouse.png";
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Alert
} from 'reactstrap';
import customHistory from "../history";
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';

var bg = require('./img/cardtwo.jpg')
class TeacherLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  login(e) {
    console.log('login press');
    let email = this.state.email.slice(0, this.state.email.length - 9)
    firebase.database().ref('/ubitportal/teacher/' + email + '/').once('value').then((snapshot) => {
      console.log(snapshot.val());
      if (snapshot.val() !== null && snapshot.val().teacher_password == this.state.password) {
        console.log('password correct');
        toast.notify(<div><Alert style={{backgroundColor: '#d4edda', color:'black'}}> teacher login successfully</Alert></div>,{
          duration: 2000,
          position:'top-right',

        });
        localStorage.setItem('teacher',email);
        customHistory.push('/teachermainpage');
      }
      else {
        toast.notify(<Alert  style={{backgroundColor: '#f8d7da', color:'black' }}>The password or email you've entered is incorrect</Alert>,{
          duration: 2000,
          position:'top-right',

        });
      }
    })

  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
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
        <div  className='background-image'
          style={{
            backgroundImage: "url(" +bg+ ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            overflow: 'hidden',
            backgroundRepeat: 'no-repeat',
            height: '780px',
            resizeMode: 'cover',


          }}>
          <Container className="container">
            <Form className="login-form">
              <Col>
                <h2>Teacher Login</h2>
                <FormGroup>
                  <Label >Email</Label>
                  <Input
                    value={this.state.email}
                    onChange={this.handleChange}

                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                  />
                </FormGroup>
                <Button onClick={this.login}>Login</Button>



              </Col>

            </Form>
          </Container>


        </div>
        <div >
               <Navbar className="justify-content-md-center" sticky="bottom" bg="dark" variant="dark">
                  <Navbar.Brand >Copyright © 2019 Department of Computer Science UBIT</Navbar.Brand >
               </Navbar>
        </div>


      </div>
    )
  }
}

export default TeacherLogin;
