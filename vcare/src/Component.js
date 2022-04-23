import React from 'react'
import './Component.css'
// import { useStateValue } from './StateProvider'

function Component({ title,image,image1,image2,image3,image4,
    r1,r2,r3,r4,r5,r6,r7,
    i1,i2,i3,i4,i5,i6,i7,
    s1,s2,s3,s4,s5,s6,s7,
    d1,d2,d3,d4,d5,d6,d7
}) {
 

    return (
      <div className="component">
          <p  className="title" id='title'>{title}</p>
        <div className="component--container">
            <div className='component--main--container'>
            <img className="component--main--image" src={image} alt="" />
            

            <div className='component--main--info'>
                
            <div className='home--remedie'>
                <h3 className='remedie'> Reason FOr disease</h3>
                <p className="reason" id  ="reason">{r1}</p>
                <p className="reason" id  ="reason">{r2}</p>
                <p className="reason" id  ="reason">{r3}</p>
                <p className="reason" id  ="reason">{r4}</p>
                <p className="reason" id  ="reason">{r5}</p>
                <p className="reason" id  ="reason">{r5}</p>
                <p className="reason" id  ="reason">{r6}</p>
                <p className="reason" id  ="reason">{r7}</p>
                </div>

                <div className='doctors--remedie'>
                    
                <h3 className='remedie'> Inforamtion about disease</h3>
                <p className="disease" id  ="disease">{i1}</p>
                <p className="disease" id  ="disease">{i2}</p>
                <p className="disease" id  ="disease">{i3}</p>
                <p className="disease" id  ="disease">{i4}</p>
                <p className="disease" id  ="disease">{i5}</p>
                <p className="disease" id  ="disease">{i6}</p>
                <p className="disease" id  ="disease">{i7}</p>
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
            <p className="info" id  ="info">{s1}</p>
            <p className="info" id  ="info">{s2}</p>
            <p className="info" id  ="info">{s3}</p>
            <p className="info" id  ="info">{s4}</p>
            <p className="info" id  ="info">{s5}</p>
            <p className="info" id  ="info">{s6}</p>
            <p className="info" id  ="info">{s7}</p>
         </div>

        <div className='doctors--remedie'>
            <h3 className='remedie'>Go To Doctor immediately if ...</h3>
            <p className="info" id ="info1">{d1}</p>
            <p className="info" id ="info1">{d2}</p>
            <p className="info" id ="info1">{d3}</p>
            <p className="info" id ="info1">{d4}</p>
            <p className="info" id ="info1">{d5}</p>
            <p className="info" id ="info1">{d6}</p>
            <p className="info" id ="info1">{d7}</p>
        </div>
            
    </div>

        </div>  
       </div>


    )
}

export default Component