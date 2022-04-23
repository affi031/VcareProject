import "./Head.css"
import Component from "./Component";
// import Component from "./Component";
import * as React from 'react';
function Head(){
    return(
    <div className="Head">
                
          <Component 
           title="Headache"
           id="01"
           image="https://apollohealthlib.blob.core.windows.net/health-library/2020/12/What-Conditions-Can-Lead-to-a-Severe-Headache.jpg"
           image1="https://apollohealthlib.blob.core.windows.net/health-library/2019/06/h2-1-768x493.png"
           image2="https://www.news-medical.net/images/news/ImageForNews_711050_16503171059359722.jpg"
           image3="https://i.insider.com/5f3440661918241ff34374a3?width=750&format=jpeg&auto=webp"
           image4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfS-Rrndn2AM1XrgsYyAN373H3uckL__Zeg&usqp=CAU"
         
           r1="1 Stress :
           Stress is a common trigger of tension-type headaches and migraine, and can trigger other types of headaches or make them worse."
           r2="2 Continously using any device:

           looking at the light on the screen, straining your eyes, bending over in a stooped posture, using your hands and fingers to type or play games, and using the phone to make phone calls."
           r3="3 Lack of sleep :
           
           it appears that a lack of sleep reduces the body's pain threshold, making it more prone to headaches."
           
           i1="1 Cannot do any task"
          i2="2  Sever pain On both sides of the head "
          i3="3 Lack of sleep"

          s1="1 Drinking water. ..."
          s2="2 medication"
          s3="3 Need maximum 8 hours of sleep"
          s4="4 drink glucose water"
          
          d1="1 Have recurring or persistent pain"
          d2="2 Feel severe pain that worsens with movement"
          d3="3 Not responsive to medications."
          d4="4 Feeling of fullness in ears."
           />
    </div>
 );}

export default Head;