import React, { Component } from 'react'
import firebaseApi from '../config/firebase'
import '../styles/App.css'
import { Navbar } from 'react-bootstrap';
import SignUp from './signup';
import { Route, NavLink, Link, BrowserRouter as Router } from 'react-router-dom'

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
// import Admin from './admin.png'
class SignIn extends Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  login(e){
    e.preventDefault();
    firebaseApi.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{

    })
    .catch(err => {
      console.log(err)
    })

  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

    render() {
      return (
        <div>
            
          <div>
                <Container className="container">
                              <Form className="login-form" >
                               <Col>
                               <h2>Admin Login</h2>
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

                                      {/* <Link to="/signup">Register</Link> */}

                               </Col>

                              </Form>
              </Container>


                </div>

        </div>
      )
   }


}

export default SignIn;
