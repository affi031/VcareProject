import React from 'react'
import { Link } from 'react-router-dom'
import './PersonalHygiene.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function PersonalHygiene() {
  return (
    <div className='personalhygiene'>
      
      <div className='card ph--card'>
        <div className=' title--image'>
          <p className='ph--title'>Headache</p>
          <Link to="/head">
          <img  className='ph--image' src='https://apollohealthlib.blob.core.windows.net/health-library/2020/12/What-Conditions-Can-Lead-to-a-Severe-Headache.jpg' alt='loading'/>
          </Link>
        </div>


        <div className='ph--info'>
          <div className='self--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>self treatment</h5>
            <p>
            Remedies that may reduce headache pain include aspirin, paracetamol and ibuprofen. Resting in a darkened room may also help
            </p>
              </div>
          <div className='doctor--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>doctor treatment</h5>
            <p>immediately if you:
              Feel worse than usual
              Get a sudden, severe headache
              Become confused, slur your speech or faint
              Have one-sided numbness or paralysis, or trouble seeing, speaking or walking</p>
          </div>
        </div>
       
      </div>
    <div className='director' >
      <InfoOutlinedIcon  className='info--icon'/>
      <p className='info--text'>CLICK ON THE IMAGE ABOVE TO GET FULL DETAILS!</p>
      </div>
      
      
      <div className='card ph--card'>
        <div className=' title--image'>
          <p className='ph--title'>leg cramp</p>
          <Link to="/lowerbody">
          <img  className='ph--image' src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_07/1538800/leg-cramp-today-main-200212.jpg' alt='loading'/>
          </Link>
        </div>


        <div className='ph--info'>
          <div className='self--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>self treatment</h5>
            <p>
            1 Drink 8 to 10 glasses of water per day. ...
2 Buy compression socks. ...
3 Soak in a cool Epsom salt bath for about 15 to 20 minutes. ...</p>          </div>
          <div className='doctor--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>doctor treatment</h5>
            <p>
            When should you call the doctor? cdReport your symptoms to your doctor if there's so much swelling that it leaves an indentation if you press your finger into it,
 or if it has developed suddenly, lasts for more than a few days, affects just one foot, or is accompanied by pain or discoloration of the skin
 </p>          </div>
        </div>
       
      </div>
      <div className='director' >
      <InfoOutlinedIcon  className='info--icon'/>
      <p className='info--text'>CLICK ON THE IMAGE ABOVE TO GET FULL DETAILS!</p>
      </div>

      <div className='card ph--card'>
        <div className=' title--image'>
          <p className='ph--title'>
            Cramp
          </p>
          <Link to="/lowerbody">
          <img  className='ph--image'
           src=
           "data:image/webp;base64,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"
           alt='loading'/>
          </Link>
        </div>


        <div className='ph--info'>
          <div className='self--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>self treatment</h5>
            <p>
            1 Stretch and massage. Stretch the cramped muscle and gently rub it to help it relax. For a calf cramp, put your weight on your cramped leg and bend your knee slightly. ...
2 Apply heat or cold. Use a warm towel or heating pad on tense or tight muscles.              </p>
          </div>
          <div className='doctor--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>doctor treatment</h5>
            <p>
            visit to your doctor will only be necessary if you get leg cramps frequently, or if they are so painful they disrupt your sleep and you are unable to function normally the
 next day. You should also visit your doctor if the muscles in your legs are shrinking or becoming weaker.               </p>
          </div>
        </div>
       
      </div>
 <div className='director' >
      <InfoOutlinedIcon  className='info--icon'/>
      <p className='info--text'>CLICK ON THE IMAGE ABOVE TO GET FULL DETAILS!</p>
      </div>

      {/* NEW ROW  */}

      <div className='card ph--card'>
        <div className=' title--image'>
          <p className='ph--title'>
            Spider Veins
          </p>
          <Link to="/lowerbody">
          <img  className='ph--image'src= "https://owh-wh-d9-prod.s3.amazonaws.com/s3fs-public/heading-images/Varicoseveinsandspiderveins.jpg?VersionId=lNL69HkFa1Q4jxXYg2b4aRUknPaRhZGi" alt='loading'/>
          </Link>
        </div>


        <div className='ph--info'>
          <div className='self--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>self treatment</h5>
            <p>
            Wearing makeup or self-tanning lotion may help hide red marks. Protecting skin from the sun may also help.              </p>
          </div>
          <div className='doctor--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>doctor treatment</h5>
            <p>
            The following symptoms are not urgent or life-threatening, but make an appointment to see a doctor if you experience: Achy, 
heavy legs that are typically relieved when elevated for at least 15 minutes. Burning, throbbing sensation over an enlarged vein. Muscle cramping and restless legs at night.               </p>
          </div>
        </div>
       
      </div>
      <div className='director' >
      <InfoOutlinedIcon  className='info--icon'/>
      <p className='info--text'>CLICK ON THE IMAGE ABOVE TO GET FULL DETAILS!</p>
      </div>
      {/* NEW ROW */}


      <div className='card ph--card'>
        <div className=' title--image'>
          <p className='ph--title'>
          Diptheria
          </p>
          <Link to="/body">
          <img  className='ph--image'
           src=
           "https://dca2kl2ymltr7.cloudfront.net/mediaLibrary/images/large/gr_id088_diphteria_img1_au.large.jpg"
           alt='loading'/>
          </Link>
        </div>


        <div className='ph--info'>
          <div className='self--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>self treatment</h5>
            <p>
            DescriptionAn antibiotic is a t
            ype of antimicrobial substance active against bacteria. It is the most important type of antibacterial agent for fighting bacterial infections, and antibiotic medications are widely used in the treatment and prevention of such infections. They may either kill or inhibit the growth of bacteria              </p>
          </div>
          <div className='doctor--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>doctor treatment</h5>
            <p>
            If you have symptoms of diphtheria or have come into contact with someone who has diphtheria, call your doctor right away. Depending on the severity of your symptoms and on your vaccination history, you may be told to go to the emergency room or call 911 or your local emergency number for medical help               </p>
          </div>
        </div>
       
      </div>
      <div className='director' >
      <InfoOutlinedIcon  className='info--icon'/>
      <p className='info--text'>CLICK ON THE IMAGE ABOVE TO GET FULL DETAILS!</p>
      </div>

      {/* NEW ROWW */}

      <div className='card ph--card'>
        <div className=' title--image'>
          <p className='ph--title'>
          COVID-19</p>
          <Link to="/body">
          <img  className='ph--image'
           src=
           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DT8VAU74FShwj6wnDdAgQ1ukpY1TGgAzZA&usqp=CAU"
           alt='loading'/>
          </Link>
        </div>


        <div className='ph--info'>
          <div className='self--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>self treatment</h5>
            <p>
            Asymptomatic cases, mild cases of COVID-19:
Isolate yourself in a well ventilated room.
Use a triple layer medical mask, discard mask after 8 hours of use or earlier if they become wet or visibly soiled. In the event of a caregiver entering the room, both caregiver and patient may consider using N 95 mask.              </p>
          </div>
          <div className='doctor--treatment'>
            <h5
            style={{
              backgroundColor:"#00203F",
              color:"white",
              fontSize:"20px",
              fontWeight:500,

            }}>doctor treatment</h5>
            <p>
            Treatment consists of immunosuppressants
While there's no cure for lupus, current treatments focus on improving quality of life through controlling symptoms and minimising flare-ups. This begins with lifestyle modifications, including sun protection and diet. Further disease management includes medication such as anti-inflammatories and steroid               </p>
          </div>
        </div>
       
      </div>
 <div className='director' >
      <InfoOutlinedIcon  className='info--icon'/>
      <p className='info--text'>CLICK ON THE IMAGE ABOVE TO GET FULL DETAILS!</p>
      </div>
    </div>
  )
}

export default PersonalHygiene