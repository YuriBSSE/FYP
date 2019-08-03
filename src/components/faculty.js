import React, { Component } from 'react'
import {
    Tabs, Tab, Col, Row, Navbar, Button,
    Nav, Form, FormControl, Card,
    DropdownButton, Dropdown, Alert,
    ListGroup, ListGroupItem, Container,
    Jumbotron, Badge
} from 'react-bootstrap';
import SirAqil from './web/img/siraqil.png'
import { Router, Switch, Route, Link } from 'react-router-dom';
import Logo from "../components/web/img/courthouse.png";
import SirSadiq from "./web/img/sirsaddiq.png";
import SirNadeemMahmood from "./web/img/sirnadeemmahmood.png";
import SirAsim from "./web/img/sirasim.jpg";
import SirSaeed from "./web/img/sirsaeed.png";

import SirTaha from "./web/img/sirtaha.png";
import MissMaryam from "./web/img/missmaryam.png";
import MissMadiha from "./web/img/missmadiha.png";
import MissShaista from "./web/img/missshaista.png";


import MissHumera from "./web/img/misshumera.png";
import SirFarhanAhmed from "./web/img/sirfarhan.png";
import SirKhalid from "./web/img/sirkhalidjamal.png";
import SirBadar from "./web/img/sirbadarsami.png";

class Faculty extends Component {

  render() {
    return (
        <div style={{backgroundColor: '#f7f7f7'}}>
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand  style={{display:'flex',flexDirection:'row',verticalAlign:'center', }}>
                <img
                  style={{paddingTop:10,borderRadius:20, backgroundColor:'rgba(219, 219, 219,1)'}}
                  src={Logo}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
                <p style={{paddingLeft:10,paddingTop:12}}>UBIT Portal</p>
          </Navbar.Brand>
                              {/* <Navbar.Brand>UBIT Portal</Navbar.Brand> */}
                              <div style={{flex:1, display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'space-between',}}>
                                  <div style={{ display:'flex', flexDirection:'row'}}>
                                      <Nav className="nav-link"><Link to={'/'} className="nav-link"> Home </Link></Nav>
                                      <Nav className="nav-link"><Link to={'/faculty'} className="nav-link"> Faculty </Link></Nav>
                                      <Nav className="nav-link"><Link to={'/admission'} className="nav-link"> Admission </Link></Nav>
                                      <Nav className="nav-link"><Link to={'/aboutus'} className="nav-link"> AboutUs </Link></Nav>
                                </div>
                  <div style={{ display:'flex', flexDirection:'row'}}>
                      <Nav className="nav-link"><Link to={'/studentlogin'} className="nav-link"> Student Login </Link></Nav>
                      <Nav className="nav-link"><Link to={'/teacherlogin'} className="nav-link"> Teacher Login </Link></Nav>
                  </div>
              </div>
          </Navbar>

              <Container className="p-0">
                <h1>Prof Dr S.M. Aqil Burney</h1>
                <h6>Founder Director</h6>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                <Card style={{ width: '18rem' }} className="m-2 p-1 col-md-3">
                    <Card.Img style={{}} variant="top" src={SirAqil} />
                  </Card>

                    <Card className="m-2 p-1">
                        <Card.Body>
                            Prof Dr S.M. Aqil Burney has served well over 42 years at University of Karachi. Now Dr. Aqil Burney is Professor at College of Computer Science and Information Systems (CCSIS) at Institute of Business Management (IoBM)Karachi, one of the leading Business Schools of the country.
                            Dr. Aqil Burney was a Meritorious Professor (R.E.) and approved supervisor in Computer Science and Statistics by the Higher Education Commission, Govt. of Pakistan. He was also the founder Director (UBIT) & Chairman of the Department of Computer Science, University of Karachi. He is also member of various higher academic boards of different universities of Pakistan.
                        </Card.Body>
                      </Card>

                  </div>
              </Container>
            <Card className="p-2 col-md-12">
            <Tabs defaultActiveKey="assistant professor" id="uncontrolled-tab-example">
            <Tab eventKey="assistant professor" title="Assistant Professor">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }} >
                    <Card style={{ width: '16rem' }} className="p-2 col-md-3">
                      <Card.Img  variant="top" src={SirSadiq} />
                        <Card.Body>
                            <Card.Title>Dr. M. Sadiq Ali Khan</Card.Title>
                            <Card.Text>
                              Dr. M. Sadiq Ali Khan is Assistant Professor of Department of Computer Science – UBIT. He completed his Ph.D in 2011 under the supervision of Prof. Dr. S.M. Aqil Burney. Dr. M. Sadiq Ali Khan had earned his Bachelors and Masters degree from Sir Syed University of Engineering and Technology
                        </Card.Text>
                        </Card.Body>
                    </Card>

              <Card style={{ width: '16rem' }} className=" p-2  col-md-3">
                  <Card.Img variant="top" src={SirNadeemMahmood} />
                  <Card.Body>
                      <Card.Title>Dr. Nadeem Mahmood</Card.Title>
                      <Card.Text>
                          Dr. Nadeem Mahmood is affiliated with the Department of Computer Science, University of Karachi as an Assistant Professor. He has been involved in teaching and research at graduate and post graduate level for the last sixteen years.
                  </Card.Text>
                  </Card.Body>
              </Card>

              <Card style={{ width: '16rem' }} className=" p-2  col-md-3">
                  <Card.Img variant="top" src={SirSaeed} />
                  <Card.Body>
                      <Card.Title>Dr. Muhammad Saeed</Card.Title>
                      <Card.Text>
                        Dr. Muhammad Saeed is Assistant Professor at Department of Computer Science – UBIT. He is one of the most hardworking and dedicated teacher of DCS – UBIT and his work for this department can not be neglected.
                  </Card.Text>
                  </Card.Body>
              </Card>

                   <Card style={{ width: '16rem' }} className="p-2  col-md-3">
                  <Card.Img variant="top" src={SirAsim} />
                  <Card.Body>
                      <Card.Title>Mr. Syed Asim Ali</Card.Title>
                      <Card.Text>
                        Syed Asim Ali has been teaching graduate level courses of Management Information System, Software Engineering,Operating System, System Analysis and Design Multimedia and Business Communication.
                  </Card.Text>
                  </Card.Body>
              </Card>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row'}}>
              <Card style={{ width: '18rem' }} className="p-2 col-md-3">
                <Card.Img style={{}} variant="top" src={SirFarhanAhmed} />
                  <Card.Body>
                      <Card.Title>Mr. Farhan Ahmed Siddiqui </Card.Title>
                      <Card.Text>
                        Mr. Farhan Ahmed Siddiqui is the Assistant Professor & Departmental Students’ Advisor at the Department of Computer Science – UBIT. He is one of the most selfless and dedicated teachers who is always ready to help students when needed.
                      </Card.Text>
                  </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }} className="p-2  col-md-3">
                  <Card.Img variant="top" src={MissHumera} />
                  <Card.Body>
                      <Card.Title>Dr. Humera Tariq</Card.Title>
                      <Card.Text>
                          Dr. Humera Tariq has been associated with Department of Computer Science since year 2004.   Her research interest in recent times is Segmentation of Brain MR Axial Slices as a part of her PhD work. Other research interests and activities at Department of Computer science include final semester project supervision including Fog Removal from Images and Pb- lite Algorithm for Edge Detection.
                      </Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="p-2 col-md-3">
                <Card.Img style={{}} variant="top" src={SirKhalid} />
                  <Card.Body>
                      <Card.Title>Mr. S. M. Khalid Jamal</Card.Title>
                      <Card.Text>
                        S. M. Khalid Jamal is an Academic Scholar, Researcher, Faculty Member and Independent Information Technology and Services Consultant and is associated as Assistant Professor with Department of Computer Science, University of Karachi since 2001.
                      </Card.Text>
                  </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }} className=" p-2  col-md-3">
                  <Card.Img variant="top" src={SirBadar} />
                  <Card.Body>
                      <Card.Title>Mr. Badar Sami</Card.Title>
                      <Card.Text>
                        Mr. Badar Sami is Chairman at Department of Computer Science – UBIT. He is one of the best teachers of the UBIT. According to Mr. Badar Sami, the goal of the education is to have a peaceful, vibrant society, so that we can interact with other people in a peaceful manner.
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
            </Tab>












            <Tab eventKey="lecturer" title="Lecturer">
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }} >
            <Card style={{ width: '18rem' }} className="p-2 col-md-3">
              <Card.Img style={{}} variant="top" src={MissShaista} />
                <Card.Body>
                    <Card.Title>Ms. Shaista Rais</Card.Title>
                    <Card.Text>
                      Education Master of Science (MS),(in Progress), from University of Karachi. Master in Computer Science (MCS), from University of Karachi.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="p-2  col-md-3">
                <Card.Img variant="top" src={SirTaha} />
                <Card.Body>
                    <Card.Title>Dr. Nadeem Mahmood</Card.Title>
                    <Card.Text>
                      Mechanical Engineering, from NED University of Engineering and Technology Bachelor of Science, from Sir Syed University of Engineering and Technology
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="p-2  col-md-3">
                <Card.Img variant="top" src={MissMadiha} />
                <Card.Body>
                    <Card.Title>Ms. Madiha Khurram</Card.Title>
                    <Card.Text>
                      Master of Computer Science, from University of Karachi Enrolled – Master of Science in Computer Science, from University of Karachi
                    </Card.Text>
                </Card.Body>
            </Card>

                 <Card style={{ width: '18rem' }} className="p-2  col-md-3">
                <Card.Img variant="top" src={MissMaryam} />
                <Card.Body>
                    <Card.Title>Ms. Maryam Feroze</Card.Title>
                    <Card.Text>
                        She started teaching at Department of Computer Science – UBIT in January 2008 as visiting faculty and now she is lecturer here.
                    </Card.Text>
                </Card.Body>
            </Card>
          </div>
            </Tab>














            <Tab eventKey="student's advisor" title="Student's Advisor">
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }} >
            <Card style={{ width: '21rem' }} className="m-1 p-2 col-md-4">
              <Card.Img style={{}} variant="top" src={SirFarhanAhmed} />
                <Card.Body>
                    <Card.Title>Mr. Farhan Ahmed Siddiqui </Card.Title>
                    <Card.Text>
                      Mr. Farhan Ahmed Siddiqui is the Assistant Professor & Departmental Students’ Advisor at the Department of Computer Science – UBIT. He is one of the most selfless and dedicated teachers who is always ready to help students when needed.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '21rem' }} className="m-1 p-2  col-md-4">
                <Card.Img variant="top" src={MissHumera} />
                <Card.Body>
                    <Card.Title>Dr. Humera Tariq</Card.Title>
                    <Card.Text>
                        Dr. Humera Tariq has been associated with Department of Computer Science since year 2004.   Her research interest in recent times is Segmentation of Brain MR Axial Slices as a part of her PhD work. Other research interests and activities at Department of Computer science include final semester project supervision including Fog Removal from Images and Pb- lite Algorithm for Edge Detection.
                    </Card.Text>
                </Card.Body>
            </Card>


                 <Card style={{ width: '21rem' }} className="m-1 p-2  col-md-4">
                <Card.Img variant="top" src={SirAsim} />
                <Card.Body>
                    <Card.Title>Dr. Nadeem Mahmood</Card.Title>
                    <Card.Text>
                      Syed Asim Ali has been teaching graduate level courses of Management Information System, Software Engineering,Operating System, System Analysis and Design Multimedia and Business Communication.
                </Card.Text>
                </Card.Body>
            </Card>
          </div>
            </Tab>
          </Tabs>
        </Card>
          <div >
               <Navbar className="justify-content-md-center" sticky="bottom" bg="dark" variant="dark">

                 <Navbar.Brand >Copyright © 2019 Department of Computer Science UBIT</Navbar.Brand >
                 </Navbar>
          </div>


        </div>
    )
  }
}

export default Faculty;
