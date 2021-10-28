import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from "../assets/logo.png"
import styles from "../styles/NavBar.module.css"
import { NavLink } from 'react-router-dom'
import { useCurrentUser } from '../contexts/CurrentUserContext'

const NavBar = () => {
    const currentUser = useCurrentUser();
    const loggedOutIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin">
                <i className="fas fa-sign-in-alt"></i> Sign In
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signup">
                <i className="fas fa-user-plus"></i> Sign Up
            </NavLink>
        </>)
    const loggedInIcons = (
        <>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signup">
                <i className="fas fa-sign-out-alt"></i> Log Out
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signup">
                <i className="fas fa-user"></i> {currentUser?.username}
            </NavLink>
        </>)

    return (
        <Navbar expand="md" fixed="top" className={styles.NavBar}>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" height="45" /> Hogwarts Moments</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                            exact
                            to="/">
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
