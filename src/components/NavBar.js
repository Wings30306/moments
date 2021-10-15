import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from "../assets/logo.png"
import styles from "../styles/NavBar.module.css"

const NavBar = () => {
    return (
        <Navbar expand="md" fixed="top" className={styles.NavBar}>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="logo" height="45" /> Hogwarts Moments</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link><i class="fas fa-home"></i> Home</Nav.Link>
                        <Nav.Link><i class="fas fa-sign-in-alt"></i> Sign In</Nav.Link>
                        <Nav.Link><i class="fas fa-user-plus"></i> Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
