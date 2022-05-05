import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || '/'

    const navigateRegister = event => {
        navigate('/register')
    }

    if (user) {
        navigate(from , {replace: true})
    }


    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='login  mx-auto mt-5'>
            <div className="text-center"> <h2>Welcome back </h2></div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
            <div className="orHolder">
                <div className='or'></div>
                <p className='mx-2'>or</p>
                <div className='or'></div>
            </div>
            <div className="other mx-auto">
                <Button className='google bg-dark text-white mx-auto rounded-pill px-5 '><Google className='me-2' color="white" size={20} />Login with Google </Button>

            </div>
            <p className="text-end">new to here?  than <Link to={'/register'} className="text-danger text-decoration-none" onClick={navigateRegister}>Register</Link></p>
        </div>
    );
};

export default Login;