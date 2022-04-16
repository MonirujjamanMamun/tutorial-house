import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        {/* <img src={} height="30" alt="" /> */}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/servises">Servises</Nav.Link>
                        <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;