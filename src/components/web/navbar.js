import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import StudentLogin from './studentLogin'
import TeacherLogin from './teacherLogin'
import { Router, Switch, Route, Link } from 'react-router-dom';
import customHistory from '../history'
import FrontPage from '../frontpage'
class Navbarr extends Component {
    render() {
        return (
'vbcvb'
                // <Router history={customHistory} >
                //     <div>
                //         <Navbar bg="dark" variant="dark">
                //             <Navbar.Brand>UBIT Portal</Navbar.Brand>
                //             <Nav className="mr-auto">
                //                 <Nav className="nav-link"><Link to={'/'} className="nav-link"> Home </Link></Nav>
                //                 <Nav className="nav-link"><Link to={'/studentlogin'} className="nav-link"> Student Login </Link></Nav>
                //                 <Nav className="nav-link"><Link to={'/teacherlogin'} className="nav-link"> Teacher Login </Link></Nav>
                //             </Nav>
                //         </Navbar>
                //         <Switch>
                //             <Route exact path='/' component={FrontPage} />
                //             <Route path='/studentlogin' component={StudentLogin} />
                //             <Route path='/teacherLogin' component={TeacherLogin} />
                //
                //         </Switch>
                //     </div>
                // </Router>





        )
    }
}

export default Navbarr;
