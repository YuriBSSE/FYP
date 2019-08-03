import React, { Component } from 'react'
import { ButtonToolbar, Navbar, Button, Nav, Form, FormControl, Card, DropdownButton, Dropdown, FormGroup, Col, Spinner } from 'react-bootstrap';
import '../styles/Student.css'
import firebase from '../config/firebase'
import { Router, Switch, Route, Link } from 'react-router-dom';
import Admin from '../admin.png'


class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      program: 'morning',
      full_name: '',
      father_name: '',
      email: '',
      password: '',
      student_id_number: '',
      errors: {}
    }



    this.onSubmit = this.onSubmit.bind(this)
  }
 

  onSubmit(e) {
    e.preventDefault()
    const newStudent = {
      program: this.state.program,
      full_name: this.state.full_name,
      father_name: this.state.father_name,
      email: this.state.email,
      password: this.state.password,
      student_id_number: this.state.student_id_number,
      semester: 1,
    }

    firebase.database().ref('ubitportal/student/' + newStudent.full_name + newStudent.student_id_number + '/').set(newStudent).then((data) => {
      alert('Student Created');

      this.setState({
        password: '',
        email: '',
        student_id_number: '',
        full_name: '',
        father_name: '',
        program: 'morning'
      });


    })

    console.log(newStudent)
  }

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >
            <img
              alt='a'
              src={Admin}
              width="30"
              height="30"

              className="d-inline-block align-top mr-1"
            />
            {'Admin Panel'}
          </Navbar.Brand>
        </Navbar>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>Admin Dashboard</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav className="nav-link"><Link to={'/admin'} className="nav-link"> Controller </Link></Nav>
            <Nav className="nav-link"><Link to={'/admin/student'} className="nav-link"> Student </Link></Nav>
            <Nav className="nav-link"><Link to={'/admin/teacher'} className="nav-link"> Teacher </Link></Nav>
            <Nav className="nav-link"><Link to={'/admin/database'} className="nav-link"> Database </Link></Nav>
          </Nav>
        </Navbar>
        <div className="container">
        <Card className="student-form ">
          <Card.Header as="h5">Student Registration</Card.Header>
          <Card.Body>

            <Form >
              <Form.Row>
                <Form.Group className="col-lg-6" controlId="Program_Controller">
                  <Form.Label>Program Selection</Form.Label>
                  <Form.Control value={this.state.program} onChange={(e) => this.setState({ program: e.target.value })} as="select">
                    <option defaultValue='morning' value="morning">Morning</option>
                    <option value="evening">Evening</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} className="col-lg-6" controlId="student_id_number">
                  <Form.Label>Student ID</Form.Label>
                  <Form.Control value={this.state.student_id_number} onChange={(e) => this.setState({ student_id_number: e.target.value })} placeholder="123456" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} className="col-lg-6" controlId="father_name">
                  <Form.Label>Father Name</Form.Label>
                  <Form.Control value={this.state.father_name} onChange={(e) => this.setState({ father_name: e.target.value })} type="String" placeholder="Father Name" />
                </Form.Group>

                <Form.Group as={Col} className="col-lg-6" controlId="full_name">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control value={this.state.full_name} onChange={(e) => this.setState({ full_name: e.target.value })} type="String" placeholder="Full Name" />
                </Form.Group>

              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} className="col-lg-6" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type="email" placeholder="xyz@ubit.com" />
                </Form.Group>

                <Form.Group as={Col} className="col-lg-6" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type="password" placeholder="******" />
                </Form.Group>

              </Form.Row>
              <ButtonToolbar>
                <Button variant="primary" onClick={this.onSubmit} type="submit">

                  Register

              </Button>

              </ButtonToolbar>
            </Form>


          </Card.Body>
        </Card>

        </div>
      </div>
    )
  }
}

export default Student;
