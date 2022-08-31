import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'> 
    <div className='navbar__text'>
        <div className='logo'><img src='https://doctorcancer.org/assets/uploads/2015/07/blogger.png' alt='logo' /></div>
        <ul className='navbar__ul'>
            <li>
                   <a href=''> Home </a>
            </li>  
            <li>
                   <a href=''> Features </a>
            </li>  
            <li>
                   <a href=''> pricing </a>
            </li>  
            <li>
                   <a href=''> Academy</a>
            </li>  
            <li>
                   <a href=''> Contact </a>
            </li> 
            </ul>   
          
    </div>
    </nav>
  )
}

export default Navbar;