import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.inti';
import './LogIn.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, passError] = useSendPasswordResetEmail(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;


  const handelGoogle = () => {
    signInWithGoogle()
  }
  if (error || googleError) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }

  if (user) {
    navigate('/chakeout')
  }

  const handelEmailPassword = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }
  const forgetPassword=()=>{
    const email= emailRef.current.value;
    sendPasswordResetEmail(email)
    alert('Email sent')
  }

  return (
    <div className='container w-50 mx-auto card bg-gray mt-3'>
      <h2 className='text-primary text-center mt-2'> Log In </h2>
      <Button onClick={handelGoogle} variant='primary w-50 mx-auto d-block mb-2' type='submit'>
        Continue With Google
      </Button>
      <div className='or-section'>
        <div className='horizental-line'> </div>
        <p> Or </p>
        <div className='horizental-line'> </div>
      </div>
      <Form onSubmit={handelEmailPassword} className='w-50 mx-auto'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control ref={emailRef} type='email' placeholder='Enter email' required />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control ref={passwordRef} type='password' placeholder='Password' required />
        </Form.Group>
        <p onClick={forgetPassword}>Forgot Password?</p>
        <Button variant='primary w-50 mx-auto d-block mb-2' type='submit'>
          Log In
        </Button>
        {errorElement}
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
