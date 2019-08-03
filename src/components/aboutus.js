import React, { Component } from 'react'

import {
    Tabs, Tab, Col, Row, Navbar, Button,
    Nav, Form, FormControl, Card,
    DropdownButton, Dropdown, Alert,
    ListGroup, ListGroupItem, Container,
    Jumbotron, Badge, Carousel
} from 'react-bootstrap';

import { Router, Switch, Route, Link } from 'react-router-dom';
import Logo from "../components/web/img/courthouse.png";
import CardOne from "./web/img/7.jpg";
import Cardva from "./web/img/va.jpg";
import CardThree from "./web/img/8.jpg";
import CardFive from "./web/img/cardfive.jpg";
class AboutUs extends Component {

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
              <div className="mt-5 mr-2 ml-2 mb-2 col-md-12 justify-content-md-center " style={{}}>

                <Carousel className="m-3 p-2">
                      <Carousel.Item>
                        <h1>
                           <Badge variant="secondary">The Department of Computer Science</Badge>
                         </h1>
                        <Card className="bg-dark text-white" >
                              <Card.Img src={CardOne} style={{width: '1200px', height: '675px'}}  alt="Card image" />
                              <Card.ImgOverlay>
                                <Card.Text className="p-2">
                          <cite title="Source Title">        The University of Karachi holds a unique position in the country's educational system. As a respected research and reaching institution, it is committed to intellectual leadership, and to excellence in both developing knowledge and conveying that knowledge to its students. The University of Karachi meets the commitments to preserve knowledge through its instructional and research programs for higher level education.
                                  The Department of Computer Science, University of Karachi, was established by a resolution of Academic Council in its meeting, held on November 27. 1984, and it began functioning in the academic year 1985-86 by offering a Degree Program in Master of Computer Science (MCS) and become one of first institutions in Karachi imparting education in Computer Science and Technology. The Department also offers evening program leading to Post Graduate Diploma (PGD) in Computer & Information Sciences. In the year 1995; Department started MCS evening program, on self-finance basis, to cater the growing demand of professionally skilled manpower in the field of Computer Science. </cite>
                                </Card.Text>
                              </Card.ImgOverlay>
                          </Card>
                      </Carousel.Item>
                      <Carousel.Item>
                        <h1>
                           <Badge variant="secondary">Career Opportunities</Badge>
                         </h1>
                        <Card className="bg-dark text-white">
                              <Card.Img src={CardThree} style={{width: '1200px', height: '675px'}} alt="Card image" />
                              <Card.ImgOverlay>
                                <Card.Text>
                              <cite title="Source Title">    Excellent career opportunities exist for the graduates of Department of Computer Science. More than 80% of graduates are immediately hired by top ranking software houses and other institutions.</cite>
                                </Card.Text>

                              </Card.ImgOverlay>
                          </Card>
                      </Carousel.Item>
                      <Carousel.Item>
                        <h1>
                           <Badge variant="secondary">Curriculum Policy</Badge>
                         </h1>
                        <Card className="bg-dark text-white">
                              <Card.Img src={Cardva} style={{width: '1200px', height: '675px'}} alt="Card image" />
                              <Card.ImgOverlay>

                                <Card.Text>
                              <cite title="Source Title">    The contents of courses offered are revised after every two years and books are recommended to cope with the rapid developments which are taking place in Computer Science and Information Technology. All the curricula have been designed in the light of recommendations of Task Force (on the Curriculum for Computer Science Programs for general Universities of Sindh). Thus all the curricula of Department of Computer Science are developed for CS/IT on the following </cite>
                              <div><b>Policy:</b></div>
                                  <Card.Text>
                                <cite title="Source Title">    "Curriculum should be made flexible so as to be responsive to the changing g structure of the market. The curricula shall encourage thinking, creativity and project construction ability. The curricula of CS/IT shall be made comparable with international standards and matching the needs of the next century by developing libraries, laboratories, and above all teaching staff". </cite>
                                    </Card.Text>
                                </Card.Text>

                              </Card.ImgOverlay>
                          </Card>
                      </Carousel.Item>

                      <Carousel.Item>
                        <h1>
                           <Badge variant="secondary">Mission Statement</Badge>
                         </h1>
                        <Card className="bg-dark text-white">
                              <Card.Img src={CardFive} style={{width: '1200px', height: '675px'}} alt="Card image" />
                              <Card.ImgOverlay>



                              </Card.ImgOverlay>
                          </Card>
                              <Carousel.Caption>
                                <Card.Text>
                                  <cite title="Source Title">   The Department of Computer Science – UBIT is dedicated to excellence demonstrated through national and international recognition. Through freedom of academic inquiry and expression, we create and disseminate knowledge by means of scholarly and creative achievements, graduate and professional education, and outreach. </cite>
                                </Card.Text>
                                <Card.Text>
                                  <cite title="Source Title">
                                    With our focus on teaching and learning, the department helps every student grow intellectually and become a contributing member of the state, national, and world communities. Through research, teaching, service, and outreach, we embrace diversity and cultivate leadership, integrity, and engaged citizenship in our students, faculty, staff, and alumni. We promote the health and well-being of citizens by enhancing the social, economic, cultural, and natural environments of the state and beyond.
                                  </cite>
                                </Card.Text>
                              </Carousel.Caption>
                      </Carousel.Item>

                    </Carousel>

                      <h1>
                         <Badge variant="secondary">Facilities</Badge>
                       </h1>

                <Card className="col-md-12 p-2">
                  <Card.Body>
                    <h3>
                       Computing Facilities
                     </h3>

                     <Card.Subtitle className="p-3">
                       The new building of the department of Computer Science (UBIT) is fully equipped with latest technology for students to get hands-on experience on different platforms of both hardware and software fields of computer science. Each lab is equipped with latest high end user computing facilities. The internet facility is available round the clock in all the labs, which enables students and faculty members to keep in touch with the latest trends in academic and the corporate world. The department is continuously upgrading the computing infrastructure according to the market demands. Following labs are functioning in the department
                     </Card.Subtitle>

                     <Card.Subtitle className="p-3">
                       <ul>
                         <li>
                           Physical Laboratory
                         </li>
                         <li>
                           Electronics Laboratory
                         </li>
                         <li>
                           Software Engineering Laboratory
                         </li>
                         <li>
                           Database and information system Laboratory
                         </li>
                         <li>
                           General purpose Laboratory
                         </li>
                       </ul>
                      </Card.Subtitle>
                      <h3>
                         Seminar Library
                       </h3>
                       <Card.Subtitle className="p-3">
                         The department also provides an in-house seminar library facility which contains more than a thousand books on computer science/IT and related disciplines along with IT/CS magazines, international research journals and periodicals.
                       </Card.Subtitle>
                       <h3>
                          Specific Research Areas
                        </h3>
                        <Card.Subtitle className="p-3">
                          The department has produced seven Ph.Ds during the past few years and over 10 candidates are on their way to the completion of their MS (CS) and Ph.D. (Computer Science) research work. Our research areas include: Artificial Intelligence, Soft Computing, Neural Networks, Advance Database systems (temporal and fuzzy), MIS, Computer Networks Network Security Parallel & Distributed Computing, Natural Language Processing etc.
                        </Card.Subtitle>


                  </Card.Body>

                </Card>
              </div>


            <div >
                   <Navbar className="justify-content-md-center" sticky="bottom" bg="dark" variant="dark">
                      <Navbar.Brand >Copyright © 2019 Department of Computer Science UBIT</Navbar.Brand >
                   </Navbar>
            </div>
        </div>
    )
  }
}

export default AboutUs;
