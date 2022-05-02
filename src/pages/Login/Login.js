import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
        <div className='login  mx-auto mt-5'>
            <div className="text-center"> <h2>Welcome back </h2></div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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
        </div>
    );
};

export default Login;