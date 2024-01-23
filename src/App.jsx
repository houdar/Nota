import './firebase'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import HomePage from './home/HomePage';
import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
     
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home/*" element={<HomePage />} />
        </Routes>
      </Router>
     
    </AuthProvider>
  );
}

export default App;
