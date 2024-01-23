import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from './sideBar';
import Todo from './Todo';
import Notes from './Notes';
import Affirmation from './Affirmation';
import Home from './Home';

const HomePage = () => {
  return (
    <div className="flex h-screen bg-primary-2">
      <SideBar />
      <div className="flex flex-grow p-8 pl-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/affirmation*" element={<Affirmation />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
