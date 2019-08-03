import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


class FooterPage extends Component {
    render() {
        return (
                <div >
                     <Navbar className="justify-content-md-center" sticky="bottom" bg="dark" variant="dark">

                       <Navbar.Brand >Copyright © 2019 Department of Computer Science UBIT</Navbar.Brand >
                       </Navbar>
                </div>
        )
    }
}

export default FooterPage;
