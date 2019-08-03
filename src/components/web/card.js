import React, { Component } from 'react';
import { Card, Button, Jumbotron,Container  } from 'react-bootstrap';
import SirSadiq from "./img/sirsaddiq.png";
import SirNadeemMahmood from "./img/sirnadeemmahmood.png";
import SirAsim from "./img/sirasim.jpg";
import SirSaeed from "./img/sirsaeed.png";
// import './card.css';
class Cards extends Component {
    render() {
        return (
          <div>
            


            <Jumbotron fluid className="p-0">
              <Container>
                <h1>Staff</h1>
                <p>
                    A good teacher can inspire hope, ignite the imagination, and instill a love of learning because what the teacher is, is more important than what he teaches. Meet the great teachers of Department of Computer Scienc- UBIT.
                </p>
              </Container>
            </Jumbotron>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }} >

                <Card style={{ width: '18rem' }} className="m-2 p-2">
                  <Card.Img style={{}} variant="top" src={SirSadiq} />
                    <Card.Body>
                        <Card.Title>Dr. M. Sadiq Ali Khan</Card.Title>
                        <Card.Text>
                          Dr. M. Sadiq Ali Khan is Assistant Professor of Department of Computer Science – UBIT. He completed his Ph.D in 2011 under the supervision of Prof. Dr. S.M. Aqil Burney. Dr. M. Sadiq Ali Khan had earned his Bachelors and Masters degree from Sir Syed University of Engineering and Technology
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="m-2 p-2">
                    <Card.Img variant="top" src={SirNadeemMahmood} />
                    <Card.Body>
                        <Card.Title>Dr. Nadeem Mahmood</Card.Title>
                        <Card.Text>
                            Dr. Nadeem Mahmood is affiliated with the Department of Computer Science, University of Karachi as an Assistant Professor. He has been involved in teaching and research at graduate and post graduate level for the last sixteen years.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="m-2 p-2">
                    <Card.Img variant="top" src={SirSaeed} />
                    <Card.Body>
                        <Card.Title>Dr. Muhammad Saeed</Card.Title>
                        <Card.Text>
                          Dr. Muhammad Saeed is Assistant Professor at Department of Computer Science – UBIT. He is one of the most hardworking and dedicated teacher of DCS – UBIT and his work for this department can not be neglected.
                    </Card.Text>
                    </Card.Body>
                </Card>

                     <Card style={{ width: '18rem' }} className="m-2 p-2">
                    <Card.Img variant="top" src={SirAsim} />
                    <Card.Body>
                        <Card.Title>Dr. Nadeem Mahmood</Card.Title>
                        <Card.Text>
                          Syed Asim Ali has been teaching graduate level courses of Management Information System, Software Engineering,Operating System, System Analysis and Design Multimedia and Business Communication.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div >
              </div>
        )
    }
}

export default Cards;
