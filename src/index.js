import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AdminDashboard from './components/admindashboard';
import SignIn from './components/signin';
import SignUp from './components/signup';
// import Student from './components/student';
// import Teacher from './components/teacher';
import Admin from './components/admin';
import { Route, Link, Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import FrontPage from "./components/frontpage"
import AboutUs from "./components/aboutus.js"
import Faculty from "./components/faculty.js"
import Admission from "./components/admission.js"
import TeacherLogin from './components/web/teacherLogin'
import StudentLogin from './components/web/studentLogin'
// import Navbarr from "./components/web/navbar"
import { Navbar, Nav } from 'react-bootstrap';
import customHistory from "./components/history";
import StudentCoursePage from './components/ubitportal/studentCoursePage';
import StudentHomePage from './components/ubitportal/studentHomePage';
import TeacherHomePage from './components/ubitportal/teacherhomepage';
import TeacherMainPage from './components/ubitportal/teachermainpage';

import Student from './components/student';
import Teacher from './components/teacher';
// import Admin from './admin';
import Database from './components/database';
class Routing extends Component {
  render() {

    return (

      <Router history={customHistory}>
        <div>
          <Route exact path="/" component={FrontPage} />
          <Route path="/admission" component={Admission} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/faculty" component={Faculty} />
          <Route  exact path="/admin" component={App} />
          <Route path="/teacherlogin" component={TeacherLogin} />
          <Route path="/studentlogin" component={StudentLogin} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/studentcoursepage:id" component={StudentCoursePage} />
          <Route path="/studenthomepage" component={StudentHomePage} />
          <Route path="/teacherhomepage:id" component={TeacherHomePage} />
          <Route path="/teachermainpage" component={TeacherMainPage} />




          <Route path='/admin/student' component={Student} />
          <Route path='/admin/teacher' component={Teacher} />
          <Route path='/admin/database' component={Database} />

        </div>
      </Router>

    )
  }
}



ReactDOM.render(<Routing />, document.getElementById('root'));





serviceWorker.unregister();
