import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import '../styles/App.css'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
// import Admin from './admin.png'
import firebaseApi from '../config/firebase'


class SignUp extends Component {
constructor(props){
  super(props);
  this.state={
    email:'',
    password:''
  }
  this.signup = this.signup.bind(this)
  this.handleChange = this.handleChange.bind(this)
}

signup(e){
  e.preventDefault();
  firebaseApi.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    alert("Create Account Successfully")
    this.props.history.push(`/signin`)
  })
  .catch(err => {
    alert(err);
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

                            <Form className="login-form">

                             <Col>
                             <h2>Sign Up</h2>
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
                                    <Button onClick={this.signup}>SignUp</Button>
                             </Col>

                            </Form>
            </Container>


              </div>

      </div>
    )
 }
}

export default SignUp;
