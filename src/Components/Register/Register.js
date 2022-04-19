
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container w-50 mx-auto card bg-gray mt-3 h-100'>
           <h1 className='text-center my-3'>Register</h1>
            <Form className='w-50 mx-auto'>
                <Form.Group className='mb-3' controlId='formBasicName'>
                    <Form.Control type='text' placeholder='Enter Name'/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Control type='email' placeholder='Enter email' required />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type='password' placeholder='Password' required />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Control type='password' placeholder='Confirm-Password' required />
                </Form.Group>
                <FormCheckInput></FormCheckInput> <span>I agre all terms & condition</span>
                <Button variant='primary w-50 mx-auto d-block mb-2' type='submit'>
                    Register
                </Button>
            </Form>
            <div className='w-50 mx-auto'><hr></hr></div>
            <div className='d-flex justify-content-between w-50 mx-auto'>
                <p>Have an account?</p>
                <Link className='text-decoration-none' to='/login'>LogIn Here</Link >
            </div>
        </div>
    );
};

export default Register;