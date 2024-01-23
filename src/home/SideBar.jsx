import React from 'react';
import logo from '../../public/images/logo.png';
import bgImage from '../../public/images/homeBg.png';
import { Link } from 'react-router-dom';

// libraries import
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCalendarCheck, faBook, faFilm, faLightbulb, faNewspaper } from '@fortawesome/free-solid-svg-icons'; // Import the entire set

const SideBar = () => {
  return (
    <div className='w-1/5 bg-home-secondary'>
      <div className='pt-8 pl-4 mb-4 md:mb-8'>
        <img src={logo} alt="logo" />
      </div>
      <div className='flex flex-col pl-4'>
        <Link className='pb-2 mt-2 md:mt-0' to='/home/home'>
          <FontAwesomeIcon icon={faHouse} className='pr-4' />Home
        </Link>
        <Link to='/home/todo' className='pb-2'>
          <FontAwesomeIcon icon={faCalendarCheck} className='pr-4' />Todo List
        </Link>
        <Link to='/home/notes' className='pb-2'>
          <FontAwesomeIcon icon={faBook} className='pr-4' />Notes
        </Link>
       
       
        <Link to='/home/affirmation' className='pb-2'>
          <FontAwesomeIcon icon={faLightbulb} className='pr-4' />Affirmations
        </Link>
      </div>
      <img src={bgImage} className='mt-4 md:mt-0' alt="" />
    </div>
  );
};

export default SideBar;
