import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './LogIn.css';

const LogIn = () => {
  return (
    <div className='container w-50 mx-auto'>
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
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' placeholder='Enter email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control type='password' placeholder='Password' required />
        </Form.Group>
        <Button variant='primary w-50 mx-auto d-block mb-2' type='submit'>
          Log In
        </Button>
      </Form>
    </div>
  )
}

export default LogIn
