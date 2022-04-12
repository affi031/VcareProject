import React from 'react'
import './Component.css'
import { useState } from 'react';
// import { useStateValue } from './StateProvider'

function Component({button, title, info,info1, image}) {
 

    return (
      <div className="component">
          <p  className="title" id='title'>{title}</p>
        <div className="component--container">
            
           
          
         
          <img className="component--image" src={image} alt="" />
          
         <div className="component--info">   
         <h3>Self-Treatment</h3>
               
            <p className="info" id  ="info">{info}</p>
            <h3>Go to A Doctor if..</h3>
            <p  className="info" id='info1'>{info1}</p> 
            <button className='button'>{button}</button>
            
            </div>
        </div>  
       </div>


    )
}

export default Component