import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; // Updated import
import { useAuth } from './contexts/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const SignUp = () => {
  const navigate = useNavigate(); // Updated hook
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signUp, signIn } = useAuth(); // Add signIn to useAuth

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signUp(emailRef.current.value, passwordRef.current.value);

      // Save user data to Firebase Realtime Database
      const db = getDatabase();
      const userRef = ref(db, `users/${userCredential.user.uid}`);
      await set(userRef, {
        username: usernameRef.current.value,
        email: emailRef.current.value,
      });

      alert('You have subscribed successfully');

      // Sign in the user after successful sign-up
      await signIn(emailRef.current.value, passwordRef.current.value);

      // Redirect to home page
      navigate('/home');
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className='flex h-screen bg-center bg-cover item' style={{ backgroundImage: `url('/images/bg.png')` }}>
      <form onSubmit={handleSubmit} action="" className='w-1/3 p-8 mt-48 mb-48 ml-16 border-2 rounded bg-primary '>
        <h1 className="mb-4 text-2xl text-yellow-800">SignUp</h1>

        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faUser} className="text-yellow-800" />
          <div className="w-full ml-2">
            <input type="text" className='w-full p-2 bg-transparent border-2 border-b-amber-800' placeholder='Username...' ref={usernameRef} />
          </div>
        </div>

        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-yellow-800" />
          <div className="w-full ml-2">
            <input type="email" className='w-full p-2 bg-transparent border-2 border-b-amber-800' placeholder='Email ...' ref={emailRef} />
          </div>
        </div>

        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faLock} className="text-yellow-800" />
          <div className="w-full ml-2">
            <input type="password" className='w-full p-2 bg-transparent border-2 border-b-amber-800' placeholder='Password ...' ref={passwordRef} />
          </div>
        </div>
        <input type="submit" value="Sign Up" className='w-full pt-1 pb-1 mt-8 mb-4 text-white rounded cursor-pointer bg-secondary hover:bg-secondary-2' />

        <p className='text-sm'>
          Already have an account? <Link to='/login' className='text-sm font-bold text-blue-600'>Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
