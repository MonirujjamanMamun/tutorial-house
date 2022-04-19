import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
  return (
    <div className='container w-50 mx-auto card bg-gray mt-3'>
      <h2 className='text-primary text-center mt-2'> Log In </h2>
      <Button variant='primary w-50 mx-auto d-block mb-2' type='submit'>
        Continue With Google
      </Button>
      <Button variant='primary w-50 mx-auto d-block mb-2' type='submit'>
        Continue With GitHub
      </Button>
      <div className='or-section'>
        <div className='horizental-line'> </div>
        <p> Or </p>
        <div className='horizental-line'> </div>
      </div>
      <Form className='w-50 mx-auto'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' placeholder='Enter email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control type='password' placeholder='Password' required />
        </Form.Group>
        <p>Forgot Password?</p>
        <Button variant='primary w-50 mx-auto d-block mb-2' type='submit'>
          Log In
        </Button>
      </Form>
        <div className='w-50 mx-auto'><hr></hr></div>
      <div className='d-flex justify-content-between w-50 mx-auto'>
        <p>Don't have an account?</p>
        <Link className='text-decoration-none' to='/register'>Register Now</Link >
      </div>
    </div>
  )
}

export default LogIn