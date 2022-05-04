import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Signup.css'

import'../Login/Login.css'
const Signup = () => {
    return (
        <div className='register   mx-auto mt-5'>
            <div className="text-center"> <h2>Register first</h2></div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="Text" placeholder="Enter your name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Register
                </Button>
            </Form>
            <div className="orHolder">
                <div className='or'></div>
                <p className='mx-2'>or</p>
                <div className='or'></div>
            </div>
            <div className="other mx-auto">
                <Button className='google bg-light text-dark mx-auto rounded-pill w-50 '>Register with Google </Button>
            </div>
            
        </div>
    );
};

export default Signup;