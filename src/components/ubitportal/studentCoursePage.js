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

class StudentCoursePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {},
            coursematerial: {},
            assigment: {},
            result: {},
            teacher: '',
            teachername:''
        }
        this.tcount = 0;
    }
    componentDidMount = () => {
        let student = localStorage.getItem("student");

        if (student) {
            console.log(this.props.match.params.id);
            firebase.database().ref('/ubitportal/course/' + this.props.match.params.id + '/').once('value').then((snapshot) => {
                console.log(snapshot.val());
                firebase.database().ref('/ubitportal/teacher/').once('value').then((snapshott) => {
                    this.setState({
                        course: snapshot.val(),
                        teacher: snapshott.val(),
                    })
                })
            })

        }
        else {
            customHistory.push('./studentlogin')
        }
    }
    render=()=> {
        Object.values(this.state.teacher).map((val,ind)=>{
            if(val.teacher_ID == this.state.course.t_teacher_ID && this.tcount === 0){
                console.log(val);
                this.tcount++;
                this.setState({
                    teachername:val.teacher_name
                })
            }
        });
        
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>{this.props.match.params.id}</Navbar.Brand>
                    <Navbar.Brand>{this.state.course != {} ? this.state.course.t_course_name_text : ''}</Navbar.Brand>
                    <Form inline className="ml-5">
                        <div><h5 style={{ color: 'white' }}>Teacher Name : {this.state.teachername}</h5></div>
                    </Form>
                </Navbar>








                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Course Material</th>

                            </tr>
                        </thead>
                        <tbody>

                            {/* <tr>
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
                            </tr> */}
                            {
                                this.state.course.coursematerial ?
                                    Object.keys(this.state.course.coursematerial).map((val, ind) => {
                                        return (
                                            // console.log(Object.keys(this.state.course.coursematerial));
                                            Object.keys(this.state.course.coursematerial).map((val, indd) => {
                                                console.log(this.state.course.coursematerial[val].coursematerial);
                                                console.log(this.state.course.coursematerial[val].coursematerialname);
                                                return (
                                                    <tr key={indd}>
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
                            {/* <tr>
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
                            </tr> */}
                            {
                                this.state.course.assigment ?
                                    Object.keys(this.state.course.assigment).map((val, ind) => {
                                        return (
                                            // console.log(Object.keys(this.state.course.assigment));
                                            Object.keys(this.state.course.assigment).map((val, indd) => {
                                                console.log(this.state.course.assigment[val].assigment);
                                                console.log(this.state.course.assigment[val].assigmentname);
                                                return (
                                                    <tr key={indd}>
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
                            {/* <tr>
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
                            </tr> */}
                            {
                                this.state.course.result ?
                                    Object.keys(this.state.course.result).map((val, ind) => {
                                        return (
                                            // console.log(Object.keys(this.state.course.result));
                                            Object.keys(this.state.course.result).map((val, indd) => {
                                                console.log(this.state.course.result[val].result);
                                                console.log(this.state.course.result[val].resultname);
                                                return (
                                                    <tr key={indd}>
                                                        <td style={{ textAlign: 'center' }}>
                                                            <a target="_blank" href={this.state.course.result[val].result}> {this.state.course.result[val].resultname} </a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        )
                                    }) :
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
                    <Form inline>
                        <Button onClick={() => {
                            localStorage.removeItem('student');
                            customHistory.push('/');
                        }}
                            variant="outline-light">Logout</Button>
                        {/* back */}
                        <Button className="ml-3" onClick={() => {

                            customHistory.push('/studenthomepage');
                        }}
                            variant="outline-light">Back</Button>
                    </Form>
                </Navbar>
            </div>
            // <div style={{}}>
            //     <div style={{ marginBottom: 20, backgroundColor: 'blue' }}>
            //         <h1 style={{ display: 'inline-block', width: '91%', textAlign: 'center', }}>Student Course</h1>
            //         <button onClick={() => {
            //             localStorage.removeItem('student');
            //             customHistory.push('/');
            //         }}
            //             style={{ width: 80, height: 30, backgroundColor: 'lightblue', border: 'none' }}>Logout</button>
            //     </div>
            //     <div style={{ backgroundColor: 'blue', display: 'flex', flexDirection: 'row' }}>
            //         <h2 style={{ textAlign: 'center', flex: 1 }}>Course 1</h2>
            //         <h2 style={{ textAlign: 'center', flex: 1 }}>Ahsan Muneer</h2>
            //     </div>
            //     <div style={{ backgroundColor: 'lightblue', display: 'flex', flexDirection: 'row' }}>
            //         <div style={{ borderRight: '1px solid blue', textAlign: 'center', flex: 1 }}>
            //             <h3 style={{ borderBottom: '1px solid blue', }}>Course Material</h3>
            //             {
            //                 this.state.coursematerial !== {} ?
            //                     Object.values(this.state.coursematerial).map((val, ind) => {
            //                         return <p style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', }} key={ind}><a target="_blank" href={val.coursematerial}>{val.coursematerialname}</a></p>
            //                     })
            //                     : 'no material'
            //             }
            //             <p>Book 1</p>
            //             <p>Book 2</p>
            //         </div>
            //         <div style={{ borderRight: '1px solid blue', textAlign: 'center', flex: 1 }}>
            //             <h3 style={{ borderBottom: '1px solid blue', }}>Assigment</h3>
            //             {
            //                 this.state.assigment !== {} ?
            //                     Object.values(this.state.assigment).map((val, ind) => {
            //                         return <p style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', }} key={ind}><a target="_blank" href={val.assigment}>{val.assigmentname}</a></p>
            //                     })
            //                     : 'No Assigment'
            //             }
            //             <p>Assgment 1</p>
            //             <p>Assgment 2</p>
            //             <p>Assgment 3</p>

            //         </div>
            //         <div style={{ textAlign: 'center', flex: 1 }}>
            //             <h3 style={{ borderBottom: '1px solid blue', }}>Result</h3>
            //             {
            //                 this.state.result !== {} ?
            //                     Object.values(this.state.result).map((val, ind) => {
            //                         return <p style={{ borderBottom: '1px solid rgba(0,0,0,0.1)', }} key={ind}><a target="_blank" href={val.result}>{val.resultname}</a></p>
            //                     })
            //                     : 'No Result'
            //             }
            //             <p>Assgment result 1</p>
            //             <p>Quiz result 1</p>
            //             <p>Assigment result 2</p>

            //         </div>
            //     </div>
            //     <div style={{ backgroundColor: 'blue', right: 0, left: 0, padding: 10, textAlign: 'center', fontSize: 20, position: "absolute", bottom: 0 }} >UBIT PORTAL</div>
            // </div>
        );
    }
}

export default StudentCoursePage;
