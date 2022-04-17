import React from 'react'
import './Diseases.css'
import { useState } from 'react';
// import { useStateValue } from './StateProvider'

function Diseases({id, title, info,info1, image}) {
 

    return (
      <div className="diseases">
          <p  className="diseases--title" id='title'>{title}</p>
        <div className="diseases--container">
            
           
          
         
          <img className="diseases--image" src={image} alt="" />
          
         <div className="diseases--info">   
             {/* <h3 className='remedie'>Self Treatment</h3>    */}
             
            <p className="diseases--text" id  ="info">{info}</p>
            {/* <h3 className='remedie'>Go To Doctor immediately if ...</h3> */}
            <p  className="info" id='info1'>{info1}</p> 
            
            </div>
        </div>  
       </div>


    )
}

export default Diseases