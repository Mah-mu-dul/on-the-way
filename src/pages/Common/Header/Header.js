import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import auth from '../../../firebase.init';
import Blogs from '../../Blogs/Blogs';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignout = ( ) => {
        signOut(auth)
    }
    return (
        <div className="">
            <Navbar bg="primary fixed-top" expand="lg">
                <Container>
                    <Navbar.Brand href="/"><h3 className='mx-auto '>On The way</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="mx-auto  me-auto ">
                            <div className="d-lg-flex me-lg-5">
                                <Nav.Link href="/home"><h4>Home</h4></Nav.Link>
                                <Nav.Link href="/blogs"><h4>Blogs</h4></Nav.Link>
                                <Nav.Link href="/services"><h4>Services</h4></Nav.Link>
                                <Nav.Link href="/about"><h4>About</h4></Nav.Link>
                            </div>
                            <div className="d-lg-flex ms-lg-5 ">
                                {
                                    user ?
                                        <button onClick={handleSignout} className='btn bg-primary box-none'><h4>signout</h4></button>
                                     
                                    :
                                    <Nav.Link href="/login"><h4>Login</h4></Nav.Link>
                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='mt-5'>.</div>

        </div>
    );
};

export default Header;