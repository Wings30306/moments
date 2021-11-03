import React, { useEffect, useRef, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from "../assets/logo.png"
import styles from "../styles/NavBar.module.css"
import { NavLink } from 'react-router-dom'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import Avatar from './Avatar'
import axios from 'axios'

const NavBar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser()

    const [expanded, setExpanded] = useState(false)
    const ref = useRef(null)

    const handleSignOut = async () => {
        try {
            await axios.post('/dj-rest-auth/logout/')
            setCurrentUser(null)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setExpanded(false)
            }
        }

        document.addEventListener("mouseup", handleClickOutside)
        return () => {
            document.removeEventListener("mouseup", handleClickOutside)
        }
    }, [ref])

    const addPostIcon = (
        <NavLink
            className={styles.NavLink}
            activeClassName={styles.Active}
            to="/create">
            <i className="far fa-plus-square"></i> Add Post
        </NavLink>
    )
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
                to="/feed">
                <i className="fas fa-stream"></i>Feed
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/liked">
                <i className="fas fa-heart"></i>Liked
            </NavLink>
            <NavLink
                className={styles.NavLink}
                to="/"
                onClick={handleSignOut}>
                <i className="fas fa-sign-out-alt"></i>Sign Out
            </NavLink>
            <NavLink
                className={styles.NavLink}
                to={`/profiles/${currentUser?.profile_id}`}>
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
            </NavLink>
        </>)

    return (
        <Navbar expanded={expanded} expand="md" fixed="top" className={styles.NavBar}>
            <Container>
                <NavLink to="/">
                    <Navbar.Brand href="#home"><img src={logo} alt="logo" height="45" /></Navbar.Brand>
                </NavLink>
                {currentUser && addPostIcon}
                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
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
