import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.inti';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const handelLogOut = ()=>{
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Tutorial House</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/servises">Servises</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            {/* <Nav.Link as={Link} to="/chakeout">Chake Out</Nav.Link> */}
                            <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
                            {user? <Nav.Link as={Link} to="/" onClick={handelLogOut}>Log Out</Nav.Link> : <Nav.Link as={Link} eventKey={2} to="/login"> LogIn </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;