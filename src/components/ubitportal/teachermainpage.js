import React, { Component } from 'react';
import * as firebase from 'firebase'
import {
    Router,
    Route,
    Link
} from 'react-router-dom'
import customHistory from '../history'
import {
    Tabs, Tab, Col, Row, Navbar, Button,
    Nav, Form, FormControl, Card,
    DropdownButton, Dropdown, Alert,
    ListGroup, ListGroupItem, Container,
    Jumbotron, Badge, Table
} from 'react-bootstrap';

class TeacherMainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            course: {}
        }
    }

    componentDidMount() {
        let teacher = localStorage.getItem("teacher");
        if (teacher) {

            console.log(teacher);

            firebase.database().ref('/ubitportal/teacher/' + teacher + '/').once('value').then((snapshot) => {
                console.log(snapshot.val());
                let teacherdata = snapshot.val();
                firebase.database().ref('/ubitportal/course/').once('value').then((snapshot) => {
                    this.setState({
                        user: teacherdata,
                        course: snapshot.val(),
                    }, () => {
                        console.log(this.state)
                    })
                })
            })
        }
        else {
            customHistory.push('./teacherlogin')

        }
    }

    render() {
        let counter = 0;

        return (


            <div >
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Teacher Dashboard</Navbar.Brand>
                </Navbar>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th><h5>Course No.</h5></th>
                            <th><h5>Course Name</h5></th>
                            <th><h5>Day & Time</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.values(this.state.course).map((val, ind) => {
                                console.log(val, ind);
                                if (val.t_teacher_ID === this.state.user.teacher_ID) {
                                    counter++;
                                    let path = '/teacherhomepage'+val.t_course_name;
                                    val.t_course_name
                                    return (
                                        <tr key={ind}>
                                            <td>{counter}</td>
                                            <td>  <Link to={path}> {val.t_course_name} </Link></td>
                                            <td>{val.t_course_name_text}</td>
                                            <td>{val.t_class_date} {val.t_class_time}</td>
                                        </tr>
                                    )
                                }
                            })
                        }
                        {/* <tr>
                            <td>1</td>
                            <td>  <Link to={'/teacherhomepage:csse(401)'}> CSSE-401 </Link></td>
                            <td>Calculus and Analytical Geometry – I</td>
                            <td>Monday 3:30</td>
                        </tr> */}

                    </tbody>
                </Table>

                <Navbar bg="dark" fixed="bottom" variant="dark">

                    <Form>
                        <Button onClick={() => {
                            localStorage.removeItem('teacher');
                            customHistory.push('/');

                        }} variant="outline-light">Logout</Button>
                    </Form>
                </Navbar>
            </div>
            // <div style={{}}>
            //     <div style={{ marginBottom: 20, backgroundColor: 'blue' }}>
            //         <h1 style={{ display: 'inline-block', width: '91%', textAlign: 'center', }}>Teacher Dashboard</h1>
            //         <button onClick={() => {
            //             localStorage.removeItem('teacher');
            //             customHistory.push('/');

            //         }}
            //             style={{ width: 80, height: 30, backgroundColor: 'lightblue', border: 'none' }}>Logout</button>
            //     </div>

            //     <div style={{ backgroundColor: 'lightblue', display: 'flex', flexDirection: 'row' }}>
            //         <div style={{ borderRight: '1px solid blue', textAlign: 'center', flex: 1 }}>
            //             <h3 style={{ borderBottom: '1px solid blue', }}>Course No</h3>

            //             <p><Link to={'/teacherhomepage:csse(401)'} className="nav-link"> csse(401) </Link></p>
            //             <p><Link to={'/teacherhomepage:csse(403)'} className="nav-link"> csse(401) </Link></p>

            //         </div>
            //         <div style={{ borderRight: '1px solid blue', textAlign: 'center', flex: 1 }}>
            //             <h3 style={{ borderBottom: '1px solid blue', }}>Course Name</h3>

            //             <p>Ordinary Differential Equation</p>
            //             <p>object Oriented Programming</p>
            //             <p>Software Engineering</p>

            //         </div>
            //         <div style={{ borderRight: '1px solid blue', textAlign: 'center', flex: 1 }}>
            //             <h3 style={{ borderBottom: '1px solid blue', }}>Day</h3>
            //             <p>Monday</p>
            //             <p>Tuesday</p>
            //             <p>Friday</p>

            //         </div>
            //         <div style={{ textAlign: 'center', flex: 1 }}>
            //             <h3 style={{ borderBottom: '1px solid blue', }}>Time</h3>
            //             <p>3:30</p>
            //             <p>6:00</p>
            //             <p>4:20</p>

            //         </div>
            //     </div>
            //     <div style={{ backgroundColor: 'blue', right: 0, left: 0, padding: 10, textAlign: 'center', fontSize: 20, position: "absolute", bottom: 0 }} >UBIT PORTAL</div>
            // </div>
        );
    }
}

export default TeacherMainPage;
