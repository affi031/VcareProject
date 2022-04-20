import React from 'react'
import './Component.css'
// import { useStateValue } from './StateProvider'

function Component({ title,reason,disease, info,image,image1,image2,image3,image4, info1,info2,info3,info4,info11,info12,info13,info14,}) {
 

    return (
      <div className="component">
          <p  className="title" id='title'>{title}</p>
        <div className="component--container">
            <div className='component--main--container'>
            <img className="component--main--image" src={image} alt="" />
            

            <div className='component--main--info'>
                
            <div className='home--remedie'>
                <h3 className='remedie'> Reason FOr disease</h3>
                <p className="reason" id  ="reason">{reason}</p>
                </div>

                <div className='doctors--remedie'>
                <h3 className='remedie'> Inforamtion about disease</h3>
                <p className="disease" id  ="disease">{disease}</p>
                </div>
            </div>
            </div>
            
           
            <p  className="related--title" id='title'>Related Images to {title}</p>
         <div className='component--image--container'>
           
          <img className="component--image" src={image1} alt="" />
          <img className="component--image" src={image2} alt="" />
          <img className="component--image" src={image3} alt="" />
          <img className="component--image" src={image4} alt="" />

          {/* <img className="component--image" src={image} alt="" /> */}
          </div>
          
    <div className="component--info">   

        <div className='home--remedie'>
             <h3 className='remedie'>Self Treatment</h3>   
            <p className="info" id  ="info">{info}</p>
         </div>

        <div className='doctors--remedie'>
            <h3 className='remedie'>Go To Doctor immediately if ...</h3>
            <p className="info" id ="info1">{info1}</p>
        </div>
            
    </div>

        </div>  
       </div>


    )
}

export default Component