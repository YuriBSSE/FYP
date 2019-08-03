import React, { Component } from 'react'

import {
    Tabs, Tab, Col, Row, Navbar, Button,
    Nav, Form, FormControl, Card,
    DropdownButton, Dropdown, Alert,
    ListGroup, ListGroupItem, Container,
    Jumbotron, Badge, Table
} from 'react-bootstrap';

import { Router, Switch, Route, Link } from 'react-router-dom';
import Logo from "../components/web/img/courthouse.png";

class Admission extends Component {

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
          <div>
            <div className="m-2 p-3">
              <Card className="p-2">
              <h1>
                <Badge variant="secondary">Why DCS-UBIT</Badge>
              </h1>
              <Card.Body>
                <Card.Title>The first one to serve in Karachi</Card.Title>
                <Card.Text>
                  The honor of being in the first place to offer BS (Software Engineering) all over in Karachi.
                </Card.Text>
                <Card.Title>State of Art labs and equipment</Card.Title>
                <Card.Text>
                  UBIT has up-to-date equipment and labs for students to further dive in and explore a new era of information technology.
                </Card.Text>
                <Card.Title>Academic Excellence</Card.Title>
                <Card.Text>
                  By virtue of its merit-based selection, it attracts the most talented students who perpetuate a culture of academic excellence.
                </Card.Text>
                <Card.Title>Career opportunities</Card.Title>
                <Card.Text>
                  Excellent career opportunities exist for the graduates of UBIT. More than 80% of graduates are immediately hired by top ranking software houses and other institutions.
                </Card.Text>
                <Card.Title>Recognized Qualifications</Card.Title>
                <Card.Text>
                  The academic programs are duly accredited by the respective professional bodies, and the qualifications are recognized internationally for their quality and relevance.
                </Card.Text>
                <Card.Title> Scholarships</Card.Title>
                <Card.Text>
                  Scholarships are awarded to the students on the merit basis.
                </Card.Text>
              </Card.Body>
            </Card>
            </div>

          <div className="mb-5 m-2 p-3">
              <Card className="p-2">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link  eventKey="first">How To Apply</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link  eventKey="second">Fee Structure</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Required Documents</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link  eventKey="forth">Programs</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Card className="p-1">
                        The admission form and receipt/admit card are enclosed with admission booklet. The applicant is required to fill in the form. Receipt, duly signed and stamped, shall be handed over to the applicant at the counter where the admission form is submitted.
                          A candidate can apply for admission in four subjects of his / her choice. The candidate is advised to write subjects in order of preferences in the space given in the application form. Admission in the subject / department shall be awarded on the basis of eligibility, merit and the number of seats available in the subject / department.
                          The powder photocopies of the following documents must be attached with the admission form at the time of submission.
                          <ul>
                            <li>
                              One copy of CNIC
                            </li>
                            <li>
                              Two copies of Mark Sheets of 1st& 2nd year of pre-requisite examination
                            </li>
                            <li>
                              A photocopy of the filled-in admission form
                            </li>
                            <li>
                               One copy of Matric (SSC) mark sheet
                            </li>
                            <li>
                              One copy of the Admit Card of 1st& 2nd year of pre-requisite examination
                            </li>
                            <li>
                              One attested photocopy of Intermediate mark sheet or Certificate (Only for Masters Program’s candidate)
                            </li>
                            <li>
                              One copy of Hifz-e-Quran certificate (only for BS program)
                            </li>
                          </ul>
                          </Card>

                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                       <Card className="p-2">

                           <Card.Body>
                             <h3><Badge variant="secondary">Admission Fee</Badge></h3>
                               <Card.Text>
                                 Admission fee will be charged at the beginning of each academic year.
                               </Card.Text>
                             <Table striped bordered hover variant="dark">
                                       <thead>
                                         <tr>
                                           <th>#</th>
                                           <th>ADMISSION FEE HEADS</th>
                                           <th>FEE</th>
                                         </tr>
                                       </thead>
                                       <tbody>
                                         <tr>
                                           <td>1</td>
                                           <td>Admission Fees</td>
                                           <td>Rs. 2,000/-</td>

                                         </tr>
                                         <tr>
                                           <td>2</td>
                                           <td>Enrolment Fee</td>
                                           <td>Rs. 1,000/-</td>

                                         </tr>
                                         <tr>
                                           <td>3</td>
                                           <td >Development Fee</td>
                                           <td>Rs. 2,000/-</td>
                                         </tr>
                                         <tr>
                                           <td>4</td>
                                           <td>Caution Money (Refundable)</td>
                                           <td>Rs. 1,000/-</td>
                                         </tr>
                                         <tr>
                                           <td></td>
                                           <td><b>	TOTAL AMOUNT </b></td>
                                           <td>Rs. 6,000/-</td>
                                         </tr>
                                       </tbody>
                                      </Table>
                                      <h3><Badge variant="secondary">Programs Fee</Badge></h3>
                                        <Card.Text>
                                          Tution fee will be charged at the beginning of every semester.
                                        </Card.Text>
                                        <Table striped bordered hover variant="dark">
                                          <thead>
                                            <tr>
                                              <th>#</th>
                                              <th>PROGRAM</th>
                                              <th>TUTION FEE</th>
                                              <th>ADMISSION FEE</th>
                                              <th>TOTAL FEE</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>1</td>
                                              <td>BSCS & BSSE (Morning)</td>
                                              <td>Rs. 19,000/-</td>
                                              <td>Rs. 6,000/-</td>
                                              <td>Rs. 25,000/-</td>
                                            </tr>
                                            <tr>
                                              <td>2</td>
                                              <td>BSCS, BSSE & MCS (Evening)</td>
                                              <td>Rs. 24,500/-</td>
                                              <td>Rs. 6,000/-</td>
                                              <td>	Rs. 30,500/-</td>
                                            </tr>
                                            <tr>
                                              <td>3</td>
                                              <td>	MCS (Morning)</td>
                                              <td>Rs. 17,000/-</td>
                                              <td>Rs. 6,000/-</td>
                                              <td>Rs. 23,000/-</td>

                                            </tr>
                                            <tr>
                                              <td>4</td>
                                              <td>	MCS (Evening)</td>
                                              <td colSpan="3"><a  href="https://www.facebook.com/kutimes/photos/a.1457917924247231/2391162720922742/?type=3&theater">MCS (Evening) Admissions 2019-20</a></td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                        <h3><Badge variant="secondary">Examination Fee</Badge></h3>
                                          <Card.Text>
                                            Examination fee for all students is charged @ Rs. 200/- per course.
                                          </Card.Text>

                                          <h3><Badge variant="secondary">Important Note</Badge></h3>
                                            <Card.Text>
                                              <ul>
                                                <li>
                                                  Fee shall be deposited through PAY-ORDER drawn in favour of The University of Karachi.
                                                </li>
                                                <li>
                                                  Fee once deposited is non-refundable under any circumstances.
                                                </li>
                                                <li>
                                                  There is no provision for fee concession, installments or scholarships.
                                                </li>
                                              </ul>
                                            </Card.Text>

                            </Card.Body>

                       </Card>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Card className="p-1">
                          <Card.Text>
                            Following documents must be submitted at the time of admission to complete the enrollment requirements.
                          </Card.Text>
                          <ul>
                            <li>
                              Original marks certificate of the pre-requisite examination passed (not to be returned) and two
                              attested Photostate copies
                            </li>
                            <li>
                              Photocopy of Matric Certificate (Photocopy of the marks sheet shall not be accepted in lieu of
                              Matric Certificate)
                            </li>
                            <li>
                              Original Character Certificate from the head of the institution last attended. For external candidates a
                                  character certificate from any Gazetted Officer (non refundable).
                            </li>
                            <li>
                              Migration certificate (for candidates who have passed the pre-requisite examination from any Board
                              or University other than Karachi)
                            </li>
                            <li>
                              Attested Photostat copy of the computerized National Identity Card of the applicant. In case the
                            candidate is below 18 years of age, father’s or mother’s Identity Card. (The original I.D shall be
                            returned after verification)
                            </li>
                            <li>
                              Eight latest Photographs (1” x 1.5”)
                            </li>
                            <li>
                              Original certificate of Hifz-e-Quran (only for bachelors program candidates)
                            </li>
                            <li>
                              Any other document as may be required by the University
                            </li>
                            <li>
                              If admission formalities are not completed in the prescribed dated, the admission will be cancelled
                                automatically and no claim will be accepted
                            </li>
                          </ul>
                          </Card>
                      </Tab.Pane>
                      <Tab.Pane eventKey="forth">
                       <Card className="p-2">
                         <Table striped bordered hover size="lg">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>PROGRAM</th>
                                  <th>SEATS</th>
                                  <th>REQUIRED ELIGIBILITY</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>BSCS (Morning & Evening)</td>
                                  <td>110</td>
                                  <td>
                                    <ul>
                                      <li>
                                        Intermediate (Pre-Engineering) / BS(Computer Science) Intermediate with (Mathematics, Statistics and Computer Science) / Intermediate with (Mathematics, Statistics and Economics) with at least 55% marks.
                                      </li>
                                      <li>
                                        DAE (Mechanical / Electrical / Electronics / Computer Information Technology) with at least 65% marks.
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>BSSE (Morning & Evening)</td>
                                  <td>110</td>
                                  <td>
                                    <ul>
                                      <li>
                                        Intermediate (Pre-Engineering) / BS(Computer Science) Intermediate with (Mathematics, Statistics and Computer Science) / Intermediate with (Mathematics, Statistics and Economics) with at least 55% marks.
                                      </li>
                                      <li>
                                        DAE (Mechanical / Electrical / Electronics / Computer Information Technology) with at least 65% marks.
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>MCS (Morning & Evening)</td>
                                  <td>70</td>
                                  <td>
                                    <ul>
                                      <li>
                                        BCS from institutions affiliated with University of Karachi or equivalent with minimum 2.5 CGPA
                                      </li>
                                      <li>
                                        B.Sc. / B.A. with Mathematics and any two of the following: (Computer Science / Statistics / Physics / Chemistry / Economics)
                                      </li>
                                      <li>
                                        B.A./B.Sc./ B.Com. and Post Graduate Diploma in Computer and Information System / Statistics / Mathematics from University of Karachi.
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                            <Card.Footer className="text-muted"><b> NOTE: </b> Admissions will be granted on the basis of Academic Percentage in the pre-requisite (Intermediate or equivalent) examination after qualifying the Entry Test with minimum 50 % marks in the Entry Test.</Card.Footer>
                       </Card>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
                </Tab.Container>
              </Card>
                </div>
          </div>
          <Navbar className="justify-content-md-center" sticky="bottom" bg="dark" variant="dark">
            <Navbar.Brand >Copyright © 2019 Department of Computer Science UBIT</Navbar.Brand >
          </Navbar>
        </div>
    )
  }
}

export default Admission;
