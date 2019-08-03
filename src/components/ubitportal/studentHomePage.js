import React, { Component } from 'react';
import {
    Router,
    Route,
    Link
} from 'react-router-dom'
import customHistory from '../history'
import firebase from '../../config/firebase'
import Timetable from '../images/timetable.png';
import Profile from '../images/2.png';
import {
    Tabs, Tab, Col, Row, Navbar, Button,
    Nav, Form, FormControl, Card,
    DropdownButton, Dropdown, Alert,
    ListGroup, ListGroupItem, Container,
    Jumbotron, Badge
} from 'react-bootstrap';

// import { Navbar, Button, Nav, Form, FormControl, Card, DropdownButton, Dropdown } from 'react-bootstrap';

class StudentHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            timetable: Timetable
        }
    }
    componentDidMount() {
        let student = localStorage.getItem("student");
        if (student) {

            console.log(student);

            firebase.database().ref('/ubitportal/student/' + student + '/').once('value').then((snapshot) => {
                console.log(snapshot.val());
                let studentdata = snapshot.val();
                firebase.database().ref('/ubitportal/timetable/' + snapshot.val().semester + '/timetableimg/').once('value').then((snapshot) => {
                    console.log(snapshot.val());

                    this.setState({
                        timetable: snapshot.val(),
                        user: studentdata,
                    }, () => { console.log('timetable') })
                })

            })



        }
        else {
            customHistory.push('./studentlogin')
        }
    }

    render() {
        return (
            <div >
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand >Student Dashboard</Navbar.Brand>
                </Navbar>



                <Container>
                    <Row>
                        <Col xs={6} md={3}>
                            <Card style={{ width: '14rem' }} className="m-2">
                                <label htmlFor="file-upload">
                                    <Card.Img className="p-2" variant="top" style={{ width: '220px', height: '200px' }} src={this.state.user.profileimg ? this.state.user.profileimg : Profile} />
                                    <div style={{
                                        cursor: 'pointer',
                                        position: 'absolute',
                                        top: '0px', left: '0px', width: '100%', height: '52%',
                                    }}>
                                    </div>
                                </label>
                                <input style={{ display: 'none' }} onChange={(e) => {
                                    let reader = new FileReader();
                                    let file = e.target.files[0];
                                    console.log(file)
                                    if (e.target.files[0].type.search('image/') !== -1) {
                                        reader.onloadend = () => {
                                            firebase.database().ref('/ubitportal/student/' + localStorage.getItem('student') + '/profileimg').set(reader.result.toString());
                                            console.log(reader.result)
                                        }
                                        reader.readAsDataURL(file)
                                    }
                                    else {
                                        alert('Please upload an image file');
                                    }
                                }} id="file-upload" type="file" />

                                <Card.Body>
                                    <Card.Title>{this.state.user.full_name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{this.state.user.student_id_number}</Card.Subtitle>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={{ fontSize: '11px' }}>Father Name: {this.state.user.father_name}</ListGroupItem>
                                    <ListGroupItem style={{ fontSize: '11px' }}>Email: {this.state.user.email}</ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col xs={12} md={8}>
                            <Tabs style={{ fontSize: '11px' }} defaultActiveKey="home" transition={false} id="noanim-tab-example">
                                <Tab eventKey="home" title="Semester 1">
                                    <img src={this.state.timetable} style={{ width: '100%', height: '350px' }} />
                                </Tab>
                                <Tab eventKey="profile" title="Semester 2" disabled>

                                </Tab>
                                <Tab eventKey="profile" title="Semester 3" disabled>

                                </Tab>
                                <Tab eventKey="profile" title="Semester 4" disabled>

                                </Tab>
                                <Tab eventKey="profile" title="Semester 5" disabled>

                                </Tab>
                                <Tab eventKey="profile" title="Semester 6" disabled>

                                </Tab>
                                <Tab eventKey="profile" title="Semester 7" disabled>

                                </Tab>
                                <Tab eventKey="profile" title="Semester 8" disabled>

                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
                <Jumbotron className="mt-0 mb-0">
                    <h1><Badge variant="dark">First Semester Courses</Badge></h1>
                    <Container >
                        <Row className="justify-content-start">
                            <Card style={{ width: '14rem' }} className="m-3">
                                <Card.Body className="p-2">
                                    <Card.Header className="m-0 p-0" style={{ backgroundColor: ' #e6f3ff', fontSize: '12px' }} as="h6">CS(SE)-301</Card.Header>
                                    <Card.Title style={{ fontSize: '14px' }}>Calculus and Analytical Geometry – I</Card.Title>
                                    <Card.Text style={{ fontSize: '12px' }}>
                                        Calculus is among the most important and useful developments of human thought.
                                        Even though it is over 300 years old, it is still considered the beginning and cornerstone
                                        of modern mathematics.
     </Card.Text>
                                    <Card.Footer className="p-1">   <Link to={'/studentcoursepagecsse(301)'}>More Detail</Link></Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '14rem' }} className="m-3">
                                <Card.Body className="p-2">
                                    <Card.Header className="m-0 p-0" style={{ backgroundColor: ' #e6f3ff', fontSize: '12px' }} as="h6">CS(SE)-303</Card.Header>
                                    <Card.Title style={{ fontSize: '14px' }}>Computer Logic Design / Digital Logic Design</Card.Title>
                                    <Card.Text style={{ fontSize: '12px' }}>
                                        It is nearly impossible to find a part of society that has not been touched
                                         by digital electronics. Obvious applications such as computers, televisions,
                                         digital video recorders and countless other consumer electronics
                                          would not be possible without them.
     </Card.Text>
                                    <Card.Footer className="p-1">   <Link to={'/studentcoursepagecsse(303)'}>More Detail</Link></Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '14rem' }} className="m-3">
                                <Card.Body className="p-2">
                                    <Card.Header className="m-0 p-0" style={{ backgroundColor: ' #e6f3ff', fontSize: '12px' }} as="h6">CS(SE)-305</Card.Header>
                                    <Card.Title style={{ fontSize: '14px' }}>Introduction to Computer Science</Card.Title>
                                    <Card.Text style={{ fontSize: '12px' }}>
                                        This course will introduce you to the field of computer science and the fundamentals
                                         of computer programming. Introduction to Computer Science I
                                          is specifically designed for students with no prior programming
                                           experience, and taking this course does not require
                                            a background in Computer Science
     </Card.Text>
                                    <Card.Footer className="p-1">   <Link to={'/studentcoursepagecsse(305)'}>More Detail</Link></Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '14rem' }} className="m-3">
                                <Card.Body className="p-2">
                                    <Card.Header className="m-0 p-0" style={{ backgroundColor: ' #e6f3ff', fontSize: '12px' }} as="h6">CS(SE)-307</Card.Header>
                                    <Card.Title style={{ fontSize: '14px' }}>Islamic Studies</Card.Title>
                                    <Card.Text style={{ fontSize: '12px' }}>
                                        Islamiat is a key to social transformation. Islamic study
                                         can change an ordinary person into a better human being
                                          and subsequently create a peaceful society. Its efficacy
                                           to inculcate Islamic values in students’ lives, turn them into ethically conscious citizens
                                         with empathy for others and to mold them into one unified nation is yet to be seen.
     </Card.Text>
                                    <Card.Footer className="p-1">   <Link to={'/studentcoursepagecsse(307)'}>More Detail</Link></Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '14rem' }} className="m-3">
                                <Card.Body className="p-2">
                                    <Card.Header className="m-0 p-0" style={{ backgroundColor: ' #e6f3ff', fontSize: '12px' }} as="h6">CS(SE)-309</Card.Header>
                                    <Card.Title style={{ fontSize: '14px' }}>English</Card.Title>
                                    <Card.Text style={{ fontSize: '12px' }}>
                                        English is the most commonly used language among foreign languages. Throughout the world,
                                         when people from different nationalities want to communicate, they commonly use English language.
                                         It also call “the language of communication”.
     </Card.Text>
                                    <Card.Footer className="p-1">   <Link to={'/studentcoursepagecsse(309)'}>More Detail</Link></Card.Footer>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '14rem' }} className="m-3">
                                <Card.Body className="p-2">
                                    <Card.Header className="m-0 p-0" style={{ backgroundColor: ' #e6f3ff', fontSize: '12px' }} as="h6">CS(SE)-311</Card.Header>
                                    <Card.Title style={{ fontSize: '14px' }}>Software Engineering-I</Card.Title>
                                    <Card.Text style={{ fontSize: '12px' }}>
                                        Software engineering is a discipline that allows us to apply engineering
                                         and computer science concepts in the development and maintenance of
                                          reliable, usable, and dependable software. There are several areas to focus on within software engineering,
                                         such as design, development, testing, maintenance, and management.
     </Card.Text>
                                    <Card.Footer className="p-1">   <Link to={'/studentcoursepagecsse(311)'}>More Detail</Link></Card.Footer>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </Jumbotron>


                <Navbar bg="dark" sticky="bottom" variant="dark">

                    <Form>
                        <Button onClick={() => {
                            localStorage.removeItem('student');
                            customHistory.push('/');

                        }} variant="outline-light">Logout</Button>
                    </Form>
                </Navbar>
            </div>



            // <div style={{ flex: 1 }}>


            //     <div style={{ backgroundColor: 'blue' }}>
            //         <h1 style={{ display: 'inline-block', width: '91%', textAlign: 'center', }}>Student Home</h1>
            //         <button onClick={() => {
            //             localStorage.removeItem('student');
            //             customHistory.push('/');

            //         }} style={{ width: 80, height: 30, backgroundColor: 'lightblue', border: 'none' }}>Logout</button>

            //     </div>
            //     <p style={{ backgroundColor: 'lightblue', textAlign: 'center', padding: 5 }}>News Update : Semester Form Available</p>

            //     <div style={{ backgroundColor: 'lightblue', display: 'flex', flexDirection: 'row', }}>

            //         <div style={{ flex: 1, textAlign: 'center' }}>
            //             {/* <img src={Timetable} style={{ width: '100px', height: '100px' }} /> */}
            //             <h3>Yasir</h3>
            //             <h3>Saleem</h3>
            //             <h3>EP-1650060</h3>
            //         </div>


            //         <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', flex: 1 }}>
            //             <h2>Courses</h2>
            //             <div style={{ margin: 13, }}><Link to={'/studentcoursepage:csse(401)'} className="nav-link"> csse(401) </Link></div>
            //             <div style={{ margin: 13, }}><Link to={'/studentcoursepage:csse(402)'} className="nav-link"> csse(402) </Link></div>
            //             <div style={{ margin: 13, }}><Link to={'/studentcoursepage:csse(403)'} className="nav-link"> csse(403) </Link></div>
            //             <div style={{ margin: 13, }}><Link to={'/studentcoursepage:csse(404)'} className="nav-link"> csse(404) </Link></div>
            //             <div style={{ margin: 13, }}><Link to={'/studentcoursepage:csse(405)'} className="nav-link"> csse(405) </Link></div>
            //             <div style={{ margin: 13, }}><Link to={'/studentcoursepage:csse(406)'} className="nav-link"> csse(406) </Link></div>
            //         </div>


            //         <div style={{ flex: 5 }}>
            //             <div style={{ paddingBottom: 5, display: 'flex', flexDirection: 'row' }}>
            //                 <div style={{ padding: 5, color: 'white', textAlign: 'center', flex: 1, backgroundColor: 'gray', }}>Semester 1</div>
            //                 <div style={{ padding: 5, textAlign: 'center', flex: 1, backgroundColor: 'lightgray', }}>Semester 2</div>
            //                 <div style={{ padding: 5, textAlign: 'center', flex: 1, backgroundColor: 'lightgray', }}>Semester 3</div>
            //                 <div style={{ padding: 5, textAlign: 'center', flex: 1, backgroundColor: 'lightgray', }}>Semester 4</div>
            //                 <div style={{ padding: 5, textAlign: 'center', flex: 1, backgroundColor: 'lightgray', }}>Semester 5</div>
            //                 <div style={{ padding: 5, textAlign: 'center', flex: 1, backgroundColor: 'lightgray', }}>Semester 6</div>
            //             </div>
            //             <img src={this.state.timetable} style={{ width: '100%', height: '350px' }} />

            //         </div>
            //     </div>
            //     <div style={{ backgroundColor: 'blue', right: 0, left: 0, padding: 10, textAlign: 'center', fontSize: 20, position: "absolute", bottom: 0 }} >UBIT PORTAL</div>

            // </div>
        )
    }
}

export default StudentHomePage;
