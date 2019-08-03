import React, { Component } from 'react';
import * as firebase from 'firebase'
import customHistory from '../history'
import {
    Tabs, Tab, Col, Row, Navbar, Button,
    Nav, Form, FormControl, Card,
    DropdownButton, Dropdown, Alert,
    ListGroup, ListGroupItem, Container,
    Jumbotron, Badge, Table
} from 'react-bootstrap';

class TeacherHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coursematerialname: '',
            coursematerial: '',
            assigmentname: '',
            assigment: '',
            resultname: '',
            result: '',

            course: {},
        }
    }

    componentDidMount() {
        let teacher = localStorage.getItem("teacher");
        if (teacher) {

            console.log(this.props.match.params.id);

            firebase.database().ref('/ubitportal/course/' + this.props.match.params.id + '/').once('value').then((snapshot) => {
                console.log(snapshot.val());
                this.setState({
                    course: snapshot.val(),
                }, () => { console.log(snapshot.val()) })
            })

        }
        else {
            customHistory.push('./teacherlogin')

        }
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Teacher Course Update  CSSE-301 </Navbar.Brand>
                </Navbar>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Course Material</th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    <input style={{}}
                                        type='file'
                                        onChange={(e) => {
                                            let reader = new FileReader();
                                            let file = e.target.files[0];
                                            console.log(file);
                                            if (e.target.files.length !== 0) {
                                                this.setState({ coursematerialname: e.target.files[0].name, coursematerial: e.target.files[0] });
                                            }
                                        }}
                                    />

                                    <Button variant="outline-dark" onClick={() => {
                                        firebase.storage().ref(`ubitportal/${this.state.coursematerialname}`).put(this.state.coursematerial).then((downloadURL) => {
                                            console.log(downloadURL)
                                            let coursematerial = {
                                                coursematerial: downloadURL.downloadURL,
                                                coursematerialname: this.state.coursematerialname,
                                            }
                                            console.log(coursematerial);
                                            firebase.database().ref('ubitportal/course/' + this.props.match.params.id + '/coursematerial/').push(coursematerial).then((data) => {
                                                this.setState({ coursematerial: '', coursematerialname: '', }, () => { console.log(this.state) })
                                            })
                                            alert('Course Material Upload');
                                        })
                                    }}> Upload </Button>
                                </td>
                            </tr>
                            {
                                this.state.course.coursematerial ?
                                    Object.keys(this.state.course.coursematerial).map((val, ind) => {
                                        return (
                                            // console.log(Object.keys(this.state.course.coursematerial));
                                            Object.keys(this.state.course.coursematerial).map((val) => {
                                                console.log(this.state.course.coursematerial[val].coursematerial);
                                                console.log(this.state.course.coursematerial[val].coursematerialname);
                                                return (
                                                    <tr  key={ind}>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <a target="_blank" href={this.state.course.coursematerial[val].coursematerial}> {this.state.course.coursematerial[val].coursematerialname} </a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        )
                                    }) :
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>
                                            No Course Outline
                                </td>
                                    </tr>
                            }

                        </tbody>
                    </Table>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Assigment</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input style={{}}
                                        type='file'
                                        onChange={(e) => {
                                            let reader = new FileReader();
                                            let file = e.target.files[0];
                                            console.log(file);
                                            if (e.target.files.length !== 0) {
                                                this.setState({ assigmentname: e.target.files[0].name, assigment: e.target.files[0] });
                                            }
                                        }}
                                    />
                                    <Button variant="outline-dark" onClick={() => {
                                        firebase.storage().ref(`ubitportal/${this.state.assigmentname}`).put(this.state.assigment).then((downloadURL) => {
                                            console.log(downloadURL)
                                            let assigment = {
                                                assigment: downloadURL.downloadURL,
                                                assigmentname: this.state.assigmentname,
                                            }
                                            console.log(assigment);
                                            firebase.database().ref('ubitportal/course/' + this.props.match.params.id + '/assigment/').push(assigment).then((data) => {
                                                this.setState({ assigment: '', assigmentname: '', }, () => { console.log(this.state) })
                                            })
                                            alert('Assigment Upload');
                                        })
                                    }}> Upload </Button>
                                </td>
                            </tr>
                            {
                                this.state.course.assigment ?
                                Object.keys(this.state.course.assigment).map((val, ind) => {
                                    return (
                                        // console.log(Object.keys(this.state.course.assigment));
                                        Object.keys(this.state.course.assigment).map((val) => {
                                            console.log(this.state.course.assigment[val].assigment);
                                            console.log(this.state.course.assigment[val].assigmentname);
                                            return (
                                                <tr  key={ind}>
                                                    <td style={{ textAlign: 'center' }}>
                                                        <a target="_blank" href={this.state.course.assigment[val].assigment}> {this.state.course.assigment[val].assigmentname} </a>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    )
                                }) :
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>
                                            No Assigment
                                </td>
                                    </tr>
                            }
                        </tbody>
                    </Table>


                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input style={{}}
                                        type='file'
                                        onChange={(e) => {
                                            let reader = new FileReader();
                                            let file = e.target.files[0];
                                            console.log(file);
                                            if (e.target.files.length !== 0) {
                                                this.setState({ resultname: e.target.files[0].name, result: e.target.files[0] });
                                            }
                                        }}
                                    />
                                    <Button variant="outline-dark" onClick={() => {
                                        firebase.storage().ref(`ubitportal/${this.state.resultname}`).put(this.state.result).then((downloadURL) => {
                                            console.log(downloadURL)
                                            let result = {
                                                result: downloadURL.downloadURL,
                                                resultname: this.state.resultname,
                                            }
                                            console.log(result);
                                            firebase.database().ref('ubitportal/course/' + this.props.match.params.id + '/result/').push(result).then((data) => {
                                                this.setState({ result: '', resultname: '', }, () => { console.log(this.state) })
                                            })
                                            alert('Result Upload');
                                        })
                                    }}> Upload </Button>
                                </td>
                            </tr>
                            {
                                this.state.course.result ?
                                Object.keys(this.state.course.result).map((val, ind) => {
                                    return (
                                        // console.log(Object.keys(this.state.course.result));
                                        Object.keys(this.state.course.result).map((val) => {
                                            console.log(this.state.course.result[val].result);
                                            console.log(this.state.course.result[val].resultname);
                                            return (
                                                <tr  key={ind}>
                                                    <td style={{ textAlign: 'center' }}>
                                                        <a target="_blank" href={this.state.course.result[val].result}> {this.state.course.result[val].resultname} </a>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    )
                                })  :
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>
                                            No Result
                                </td>
                                    </tr>
                            }
                        </tbody>
                    </Table>
                </div>

                <Navbar bg="dark" fixed="bottom" variant="dark">

                    <Form>
                        <Button onClick={() => {
                            localStorage.removeItem('teacher');
                            customHistory.push('/');
                        }}
                            variant="outline-light">Logout</Button>

                        <Button className="ml-3" onClick={() => {

                            customHistory.push('/teachermainpage');
                        }}
                            variant="outline-light">Back</Button>
                    </Form>
                </Navbar>
            </div>
        );
    }
}

export default TeacherHomePage;
