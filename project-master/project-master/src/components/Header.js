import React from 'react';
import Navbar from './Navbar';


const Header = () => {
  return  <div className="banner">
    <Navbar />
    <div className='banner__content'>
      <div className='container'>
        <div className='banner__text'>
           <h3>Web Based</h3>
        <h1>BLOG GENERATOR</h1>
        <p>
        Just enter your topic, and we'll do the work..
        </p>
        <div className='banner__btn'>
           <a className='btn btn-smart' href=' '> View More </a>
        </div>
        </div>
      
      </div>
      
    </div>
    
   
  </div>
  
  
};

export default Header;
