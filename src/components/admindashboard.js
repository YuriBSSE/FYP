import React, { Component } from 'react'
import firebaseApi from '../config/firebase'
import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap';
import Student from './student';
import Teacher from './teacher';
import Admin from './admin';
import Database from './database';
import { Router, Switch, Route, Link } from 'react-router-dom';


import StudentCoursePage from "./ubitportal/studentCoursePage";
import StudentHomePage from "./ubitportal/studentHomePage";
import TeacherHomePage from "./ubitportal/teacherhomepage";
import TeacherMainPage from "./ubitportal/teachermainpage";

import customHistory from './history'


class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    // this.logout = this.logout.bind(this);
  }

  // logout(){
  //   firebaseApi.auth().signOut()
  // }

  render() {
    return (


      // <Router history={customHistory} >
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand>Admin Dashboard</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav className="nav-link"><Link to={'/admin'} className="nav-link"> Controller </Link></Nav>
              <Nav className="nav-link"><Link to={'/admin/student'} className="nav-link"> Student </Link></Nav>
              <Nav className="nav-link"><Link to={'/admin/teacher'} className="nav-link"> Teacher </Link></Nav>
              <Nav className="nav-link"><Link to={'/admin/database'} className="nav-link"> Database </Link></Nav>
            </Nav>
          </Navbar>

          <Admin />
          {/* <Switch> */}
            {/* <Route exact path='/admin' component={Admin} />

            <Route path='/admin/student' component={Student} />
            <Route path='/admin/teacher' component={Teacher} />
            <Route path='/admin/database' component={Database} /> */}
          {/* </Switch> */}

        </div>
      // </Router>
    )
  }
}

export default AdminDashboard;
