import React, { Component } from 'react'
import firebase from '../config/firebase'
import { Navbar, Button, Nav, Form, FormControl, Table } from 'react-bootstrap';
import '../styles/Database.css'
import Admin from '../admin.png'
import { Router, Switch, Route, Link } from 'react-router-dom';


class Database extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacher: {},
      student: {},
    }
  }

  componentDidMount() {

    firebase.database().ref('/ubitportal/student/').once('value').then((snapshot) => {
      console.log(snapshot.val());
      let studentdata = snapshot.val();

      firebase.database().ref('/ubitportal/teacher/').once('value').then((snapshot) => {
        console.log(snapshot.val());

        this.setState({
          student: studentdata,
          teacher: snapshot.val(),
        }, () => { console.log(this.state) })
      })

    })
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
          <h2 style={{ textAlign: 'center', color: 'rgba(0,0,0,0.6)' }}>Student Data</h2>
          <Table striped bordered hover size="sm">
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th style={{ textAlign: 'center' }}>No.</th>
                <th style={{ textAlign: 'center' }}>Name</th>
                <th style={{ textAlign: 'center' }}>Father Name</th>
                <th style={{ textAlign: 'center' }}>Semester</th>
                <th style={{ textAlign: 'center' }}>Student ID</th>
                <th style={{ textAlign: 'center' }}>Email</th>
                <th style={{ textAlign: 'center' }}>Program</th>

              </tr>
            </thead>
            <tbody>
              {
                Object.values(this.state.student).map((val, ind) => {
                  return (
                    <tr style={{ textAlign: 'center' }} key={ind}>
                      <td>{ind + 1}</td>
                      <td>{val.full_name}</td>
                      <td>{val.father_name}</td>
                      <td>{val.semester}</td>
                      <td>{val.student_id_number}</td>
                      <td>{val.email}</td>
                      <td>{val.program}</td>
                    </tr>
                  )
                })
              }

            </tbody>
          </Table>


          <h2 style={{marginTop:50, textAlign: 'center', color: 'rgba(0,0,0,0.6)' }}>Teacher Data</h2>

          <Table striped bordered hover size="sm" >
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Teacher ID</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.values(this.state.teacher).map((val, ind) => {
                  return (
                    <tr style={{ textAlign: 'center' }} key={ind}>
                      <td>{ind + 1}</td>
                      <td>{val.teacher_name}</td>
                      <td>{val.teacher_email}</td>
                      <td>{val.teacher_ID}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>

      </div>
    )
  }
}

export default Database;
