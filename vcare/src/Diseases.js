import React from 'react'
import './Diseases.css'
function Diseases({id, title, info,info1, image}) {
 

    return (
      <div className="diseases">
          <p  className="diseases--title" id='title'>{title}</p>
        <div className="diseases--container">
            
           
          
         
          <img className="diseases--image" src={image} alt="" />
          
        </div>  
       </div>


    )
}

export default Diseases