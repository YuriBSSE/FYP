import React, { Component } from 'react'
import firebase from '../config/firebase'
import { Navbar, Button, Nav, Form, FormControl, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import '../styles/Admin.css'

class Admin extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      fill: null,
      semester: '1',
      program: 'morning',
      fillname: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }


  logout() {
    firebase.auth().signOut()
  }
  render() {
    return (
      <div>
        <div className="container">

          <Card className="upload-form ">
            <Card.Header as="h5">Time Table Uploader</Card.Header>
            <Card.Body>


              <Form.Group controlId="Semester_Controller">
                <Form.Label>Semester Selection</Form.Label>
                <Form.Control value={this.state.semester} onChange={(e) => this.setState({ semester: e.target.value })} as="select">
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
              <Form.Group controlId="Program_Controller">
                <Form.Label>Program Selection</Form.Label>
                <Form.Control value={this.state.program} onChange={(e) => this.setState({ program: e.target.value })} as="select">
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                </Form.Control>
              </Form.Group>
              <Form.Label>Time Table Image</Form.Label>
              <input type="file" onChange={(e) => this.setState({ fill: e.target.files[0], fillname: e.target.files[0].name })} />


              <Button onClick={() => {
              
                firebase.storage().ref(`ubitportal/${this.state.fillname}`).put(this.state.fill).then((downloadURL) => {

                  console.log(downloadURL)
                  let timetable = {
                    timetableimg: downloadURL.downloadURL,
                    semester: this.state.semester,
                    program: this.state.program
                  }

                  firebase.database().ref('ubitportal/timetable/'+timetable.semester+'/').set(timetable).then((data) => {
                    this.setState({ fill: null, semester: '1', program: 'morning',fillname:'' }, () => { console.log(this.state) })
                  })
                  alert('Timetable Upload');
                })

              }} className="mt-3" variant="primary">Submit</Button>


            </Card.Body>
          </Card>

        </div>
        <Navbar fixed="bottom" bg="dark" variant="dark">
          <Form inline>
            <Button variant="light" size="sm" onClick={this.logout}>Logout</Button>
          </Form>
        </Navbar>
      </div>

    )
  }
}

export default Admin;
