import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import one from './img/frontpage.jpg'
import two from './img/8.jpg'


class Carousell extends Component {
    render() {
        return (
          <div>
            <Carousel>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={two}
                  alt="Third slide"
                  style={{width: '1200px', height: '675px'}}
                />

              <Carousel.Caption className="mb-5">

                  <b >Its the best Computer science institute of Pakistan.</b>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={one}
                  alt="two slide"
                  style={{width: '1200px', height: '675px'}}
                />
                <Carousel.Caption className="mb-5">

                    <b >To provide high quality, student-centered education and lifelong learning opportunities for the communities we serve.</b>
                  </Carousel.Caption>
              </Carousel.Item>


            </Carousel>
          </div>
        )
    }
}

export default Carousell;
