import React from 'react'
import './Home.css';
import Head from './Head';
import Diseases from './Diseases';
import Component from './Component';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
        <div className="home--container">
             <div className='image--container'>
                
         
          <img className="home--image1" src="https://asclepius.ancorathemes.com/splash/src/img/hero/left/2.jpg" ></img>
          
          
         
          <img className='home--image2 ' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/1.jpg'></img>
          <img className='home--image3' src='https://asclepius.ancorathemes.com/splash/src/img/hero/left/4.jpg'></img>
          <img className='home--image4' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/4.jpg'></img>
          <img className='home--image5' src='https://asclepius.ancorathemes.com/splash/src/img/hero/left/6.jpg'></img>
          <img className='home--imagecenter' src='https://asclepius.ancorathemes.com/splash/src/img/logo.svg'></img>
          <img className='home--image6' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/3.png'></img>
          <img className='home--image7' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/6.jpg'></img>

          </div>
            <div className='home--row--container'>
            <div className="home--row">
               <Link to="/head">
                <Diseases 
               info="Click Here To CHeck Diseases Related To Head.."
               image="https://www.prints-online.com/p/164/anatomy-head-throat-609838.jpg.webp"  
               />
               </Link>
              </div>
            <div className="home--row">
               <Link to="/body">
              <Diseases 
               info="Click Here To CHeck Diseases Related To Body.."
               image="https://scontent.fbom51-1.fna.fbcdn.net/v/t1.18169-9/69866_151413974900531_7782621_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=103&ccb=1-5&_nc_sid=7aed08&_nc_ohc=toVhc1RSsNIAX-DHfBf&_nc_ht=scontent.fbom51-1.fna&oh=00_AT-BiwenYWgPBNn37cYS42_BcKMCAyhxdyWgzv6fLO7acg&oe=627A19F0"
               />
               </Link>
                 </div>
              
                 <div className="home--row">
                    <Link to="/lowerbody">
              <Diseases 
               info="Click Here To CHeck Diseases Related To Head.."
               image="https://www.researchgate.net/publication/333898976/figure/fig1/AS:771855384338432@1561036072182/Brief-anatomy-of-lower-body-bone-structure-of-human-body-3.png"
               />
               </Link>
                 </div>

               
           {/* <Diseases 
               id="01"
               title="Abdominal Pain / Stomachache"
               info="Baking soda for heartburn, mix 1 teaspoon of baking soda in 8 ounces of water and drink it.
               Ginger to aid digestion and reduce nausea. Ginger root is the best; try soaking ginger roots in hot water or tea.
               Heating bags compress on your stomach for cramp-like pain
               A liquid diet of broth and sweetened, non-caffeinated sports drinks
               Lying tilted to the left side, which can help you pass the gas
               Modify your diet to exclude problematic foods, such as dairy products, beans, broccoli, and potential allergens
               Blackstrap molasses for constipation. Take 1 tablespoon per day.
               Tylenol for pain or fever"
               image="https://virinchihospitals.com/wp-content/uploads/2019/02/stomachpain-1200x900.jpg"
               info1="The abdomen is stiff or hard and tender when you or someone else touches it
               Blood in stool or vomit
               Constipation with vomiting
               Difficulty in breathing
               Dizziness
               High fever (over 101 degrees Fahrenheit)
               Pulsating mass in the abdomen
               Rapid pulse or rapid breathing
               Severe pain spreading from the original location, such as to the chest, arm, neck, jaw, or shoulder
               Jaundice"
               />
          

   


          
            </div>

            <div className="home--row">
          

            <Diseases 
               id="04"
               title="Headache /Migrane"
               info="Remedies that may reduce headache pain include aspirin, paracetamol and ibuprofen. Resting in a darkened room may also help."
               image="https://media.istockphoto.com/photos/man-with-brain-stroke-symptoms-picture-id1168179082?k=20&m=1168179082&s=612x612&w=0&h=9OY1eRZhghhh4LPvsnxE5vx6G9tVF4piDqvRMrBdp3Y="
               info1="See a doctor immediately if you:
               Feel worse than usual
               Get a sudden, severe headache
               Become confused, slur your speech or faint
               Have one-sided numbness or paralysis, or trouble seeing, speaking or walking
               Develop a fever higher than 102°F (39°C)
               Experience nausea or vomiting
               Make an appointment to see a doctor if you:
               Start having frequent headaches
               Are getting worse over time
               Can't work, sleep or do daily activities
               Don't improve with self-treatment"
               />



               
         
           

        </div>

            <div className="home--row">
           
          <Diseases
               id="06"
               title="Dizziness"
               info="Moving more slowly from a sitting or lying position to a standing one may help reduce dizziness. Drinking plenty of decaffeinated fluids and avoiding smoking may also help."
               image="https://www.biaphysio.com/wp-content/uploads/2020/07/Vertigo-Image@2x.jpg"
               info1="See a doctor immediately if you
               Experience chest pain, an irregular heartbeat or shortness of breath
               Have severe headache, difficulty walking, trouble speaking, vision changes, facial weakness or numbness
               Become dizzy after a head injury
               Develop a high fever, stiff neck or persistent vomiting
               Make an appointment to see a doctor if you
               Get dizzy repeatedly
               Have dizziness that lasts for a long time
               Experience severe dizziness
               Feel that the room is spinning
               Can't perform daily activities"
               />

               

               

            </div>
            <div className="home--row">
           
          <Diseases
               id="06"
               title="Chest Pain"
               info="To prevent heartburn, it's best to avoid lying down for at least two hours after eating. Avoiding fats, chocolate and citrus foods may also help. Antacid medications may ease symptoms immediately. Other medications such as omeprazole and ranitidine take longer to work, but may provide more effective relief if prescribed by a doctor."
               image="https://media.gettyimages.com/illustrations/illustration-of-a-man-with-chest-pain-illustration-id1124668804?s=612x612"
               info1="Develop new, persistent chest pain
               Sweat, feel short of breath or have pain radiating to the back, arm or jaw
               Experience nausea, dizziness, weakness or confusion
               Feel a heavy sensation in the mid-chest
               Have pain that comes and goes, or is worse with activity
               Make an appointment to see a doctor if you:
               Feel pain during physical activity
               Have pain that worsens over time and interferes with daily activity
               Don't sleep well."
               />
               </div>

               <div className='home--row'>
               <Diseases 
               id="05"
               title="Vomitting"
               info="Taking small sips of oral rehydration solution (ORS) may help prevent dehydration. If fluids stay down, eating toast, crackers, gelatin or other easy-to-digest foods may ease an upset stomach."
               image="https://thumbs.dreamstime.com/z/projectile-vomiting-man-wearing-scrubs-hospital-98633868.jpg"
               info1="Have chest pain, blurry vision, confusion, high fever or stiff neck
               Notice blood, faecal matter or a green colour in your vomit
               Make an appointment to see a doctor if you:
               Are an adult who can't keep fluid down for 12 hours or more
               Have a child who can't keep fluid down for eight hours or more
               Feel extremely thirsty, urinate infrequently or become light-headed"
               /> */}

               
             
               

               

            </div> 
            {/* <Diseases 
               id="01"
               title="Abdominal Pain / Stomachache"
               info="Baking soda for heartburn, mix 1 teaspoon of baking soda in 8 ounces of water and drink it.
               Ginger to aid digestion and reduce nausea. Ginger root is the best; try soaking ginger roots in hot water or tea.
               Heating bags compress on your stomach for cramp-like pain
               A liquid diet of broth and sweetened, non-caffeinated sports drinks
               Lying tilted to the left side, which can help you pass the gas
               Modify your diet to exclude problematic foods, such as dairy products, beans, broccoli, and potential allergens
               Blackstrap molasses for constipation. Take 1 tablespoon per day.
               Tylenol for pain or fever"
               image="https://virinchihospitals.com/wp-content/uploads/2019/02/stomachpain-1200x900.jpg"
               info1="The abdomen is stiff or hard and tender when you or someone else touches it
               Blood in stool or vomit
               Constipation with vomiting
               Difficulty in breathing
               Dizziness
               High fever (over 101 degrees Fahrenheit)
               Pulsating mass in the abdomen
               Rapid pulse or rapid breathing
               Severe pain spreading from the original location, such as to the chest, arm, neck, jaw, or shoulder
               Jaundice"
               /> */}
            </div>
        </div>  
    )
}

export default Home
