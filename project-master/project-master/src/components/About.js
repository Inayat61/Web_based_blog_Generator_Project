import React from 'react'

function About() {
  return (
    <div className='about'>
        <div className='container'>
           <div className='row'>
               
               <div className='col-6'>
                <div className='about__img'>
                    <img src='/img/bg-1.jpg' alt="pizza"></img>
                </div>
                </div>
                
               <div className='col-6  p-23' > 
               <h3>about us</h3>
            <h1> The Web Based Blog Generator </h1>
            <p>         
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </p>
            <div className='about__btn'>
                <a href='' className='btn btn-smart'> read more </a>
            </div>
               </div>

           </div>
        </div>
    </div>
  )
}

export default About