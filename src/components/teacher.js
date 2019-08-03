import React, { Component } from 'react'
import { ButtonToolbar, Navbar, Button, Nav, Form, FormControl, Card, DropdownButton, Dropdown, FormGroup, Col, Spinner } from 'react-bootstrap';
import '../styles/Teacher.css'
import TimePicker from 'react-time-picker';
import DateTimePicker from 'react-datetime-picker';
import firebase from '../config/firebase'
import Admin from '../admin.png'
import { Router, Switch, Route, Link } from 'react-router-dom';



class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher_name: '',
      teacher_email: '',
      teacher_password: '',
      teacher_ID: '',
      t_section: '',
      t_semester: '',
      t_course_name: '',
      t_teacher_ID: '',
      t_class_date: '',
      t_class_time: '',
      t_course_name_text: ''
    }

    this.teacher_registration = this.teacher_registration.bind(this)
    this.teacher_enrollment = this.teacher_enrollment.bind(this)

  }


  teacher_registration(e) {
    e.preventDefault()
    const newTeacher = {
      teacher_name: this.state.teacher_name,
      teacher_email: this.state.teacher_email,
      teacher_password: this.state.teacher_password,
      teacher_ID: this.state.teacher_ID
    }
    console.log(newTeacher);

    firebase.database().ref('ubitportal/teacher/' + newTeacher.teacher_name + newTeacher.teacher_ID + '/').set(newTeacher).then((data) => {
      alert('Teacher Created');
      this.setState({
        teacher_name: '',
        teacher_email: '',
        teacher_password: '',
        teacher_ID: '',
      });
    });



  }



  teacher_enrollment(e) {
    e.preventDefault()
    // let day = ['day', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday', 'Sunday'];
    // let Daytime = day[this.state.t_class_date.getDay()] + this.state.t_class_date.toLocaleTimeString();
    const courseEnroll = {
      t_section: this.state.t_section,
      t_semester: this.state.t_semester,
      t_course_name: this.state.t_course_name,
      t_teacher_ID: this.state.t_teacher_ID,
      t_class_date: this.state.t_class_date,
      t_course_name_text: this.state.t_course_name_text,
      t_class_time: this.state.t_class_time
    }

    console.log(courseEnroll)


    firebase.database().ref('ubitportal/course/' + courseEnroll.t_course_name + '/').set(courseEnroll).then((data) => {
      alert('Teacher Enroll');

      this.setState({
        t_section: '',
        t_semester: '',
        t_course_name: '',
        t_teacher_ID: '',
        t_class_date: '',
        t_course_name_text:'',
         t_class_time: ''
      });
    });


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
          <Card className="student-form">
            <Card.Header as="h5">Teacher Registration</Card.Header>
            <Card.Body>

              <Form >
                <Form.Row>
                  <Form.Group as={Col} className="col-lg-6" controlId="teacher_name">
                    <Form.Label>Teacher Name</Form.Label>
                    <Form.Control value={this.state.teacher_name} onChange={(e) => this.setState({ teacher_name: e.target.value })} type="String" placeholder="Full Name" />
                  </Form.Group>
                  <Form.Group as={Col} className="col-lg-4" controlId="teacher_ID">
                    <Form.Label>Teacher ID</Form.Label>
                    <Form.Control type="Number" value={this.state.teacher_ID} onChange={(e) => this.setState({ teacher_ID: e.target.value })} type="Number" placeholder="Unique Key" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} className="col-lg-6" controlId="teacher_email">
                    <Form.Label>Teacher Email</Form.Label>
                    <Form.Control value={this.state.teacher_email} onChange={(e) => this.setState({ teacher_email: e.target.value })} type="email" placeholder="xyz@gmail.com" />
                  </Form.Group>

                  <Form.Group as={Col} className="col-lg-6" controlId="teacher_password">
                    <Form.Label>Teacher Password</Form.Label>
                    <Form.Control value={this.state.teacher_password} onChange={(e) => this.setState({ teacher_password: e.target.value })} type="password" placeholder="******" />
                  </Form.Group>

                </Form.Row>

                <Button variant="primary" onClick={this.teacher_registration} type="submit">
                  Register
              </Button>


              </Form>


            </Card.Body>
          </Card>

          <Card className="student-form mt-5">
            <Card.Header as="h5">Teacher Course Enrollment</Card.Header>
            <Card.Body>

              <Form >
                <Form.Row>
                  <Form.Group className="col-lg-6" controlId="t_section">
                    <Form.Label>Class Section</Form.Label>
                    <Form.Control value={this.state.t_section} onChange={(e) => this.setState({ t_section: e.target.value })} as="select">
                      <option defaultValue></option>
                      <option value="A">Section A</option>
                      <option value="B">Section B</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} className="col-lg-6" controlId="t_teacher_ID">
                    <Form.Label>Teacher ID</Form.Label>
                    <Form.Control type="Number" value={this.state.t_teacher_ID} onChange={(e) => this.setState({ t_teacher_ID: e.target.value })} type="Number" placeholder="Unique Key" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} className="col-lg-3" controlId="t_semester">
                    <Form.Label> Semester</Form.Label>
                    <Form.Control value={this.state.t_semester} onChange={(e) => this.setState({ t_semester: e.target.value })} as="select">
                      <option defaultValue></option>
                      <option value="1">Semester 1</option>
                      <option value="2">Semester 2</option>
                      <option value="3">Semester 3</option>
                      <option value="4">Semester 4</option>
                      <option value="5">Semester 5</option>
                      <option value="6">Semester 6</option>
                      <option value="7">Semester 7</option>
                      <option value="8">Semester 8</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} className="col-lg-3" controlId="t_course_name">
                    <Form.Label>Course ID</Form.Label>
                    <Form.Control value={this.state.t_course_name} onChange={(e) => this.setState({ t_course_name: e.target.value })} as="select">
                      <option defaultValue></option>
                      <option value="csse(301)">CS(SE)-301</option>
                      <option value="csse(303)">CS(SE)-303</option>
                      <option value="csse(305)">CS(SE)-305</option>
                      <option value="csse(307)">CS(SE)-307</option>
                      <option value="csse(309)">CS(SE)-309</option>
                      <option value="csse(311)">CS(SE)-311</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} className="col-lg-6" controlId="t_course_name_text">
                    <Form.Label>Course Name</Form.Label>
                    <Form.Control value={this.state.t_course_name_text} onChange={(e) => this.setState({ t_course_name_text: e.target.value })} type="String" placeholder="Course Name" />
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} className="col-lg-4" controlId="t_class_date" >
                    <Form.Label>Class Day</Form.Label>
                    <Form.Control value={this.state.t_class_date} onChange={(e) => this.setState({ t_class_date: e.target.value })} as="select">
                    <option defaultValue></option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      </Form.Control>
                    </Form.Group>
                   

                    <Form.Group as={Col} className="col-lg-4" controlId="t_class_time" >
                    <Form.Label>Class Timing</Form.Label>
                    <Form.Control value={this.state.t_class_time} onChange={(e) => this.setState({ t_class_time: e.target.value })} as="select">
                    <option defaultValue></option>
                      <option value="9 AM">9 AM</option>
                      <option value="10 AM">10 AM</option>
                      <option value="11 AM">11 AM</option>
                      <option value="12 AM">12 AM</option>
                      <option value="1 PM">1 PM</option>
                      <option value="2 PM">2 PM</option>
                      <option value="3 PM">3 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="4 PM">4 PM</option>
                      <option value="4:30 PM">4:30 PM</option>
                      <option value="5 PM">5 PM</option>
                      <option value="5:30 PM">5:30 PM</option>
                      <option value="6 PM">6 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="7 PM">7 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
               
                      
                      </Form.Control>
                    </Form.Group>
                </Form.Row>


                <Button variant="primary" onClick={this.teacher_enrollment} type="submit">
                  Enroll
        </Button>
              </Form>


            </Card.Body>
          </Card>
        </div>


      </div>
    )
  }
}

export default Teacher;
