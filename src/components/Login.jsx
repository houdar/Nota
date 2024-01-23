import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(emailRef.current.value, passwordRef.current.value);
      alert('You have logged in successfully');
      navigate('/home'); // Redirect to the homepage
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className='flex h-screen bg-center bg-cover item' style={{ backgroundImage: `url('/images/bg.png')` }}>
      <form onSubmit={handleSubmit} action="" className='w-1/3 p-8 mt-48 mb-48 ml-16 border-2 rounded bg-primary '>
        <h1 className="mb-4 text-2xl text-yellow-800">Login</h1>

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
        <input type="submit" value="Login" className='w-full pt-1 pb-1 mt-8 mb-4 text-white rounded cursor-pointer hover:bg-secondary-2 bg-secondary' />
      </form>
    </div>
  );
}

export default Login;
