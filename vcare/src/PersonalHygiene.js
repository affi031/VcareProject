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
          <img  className='ph--image' src='https://apollohealthlib.blob.core.windows.net/health-library/2020/12/What-Conditions-Can-Lead-to-a-Severe-Headache.jpg'/>
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
          <img  className='ph--image' src='https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_07/1538800/leg-cramp-today-main-200212.jpg'/>
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
            TITLE
          </p>
          <Link to="//">
          <img  className='ph--image'
           src=
           ""
           />
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
              SELF TREATEMENT CONTENT HERE
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
            <p>
              doCTOR TREATMENT CONTENT HERE
               </p>
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
            TITLE
          </p>
          <Link to="//">
          <img  className='ph--image'
           src=
           ""
           />
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
              SELF TREATEMENT CONTENT HERE
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
            <p>
              doCTOR TREATMENT CONTENT HERE
               </p>
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
            TITLE
          </p>
          <Link to="//">
          <img  className='ph--image'
           src=
           ""
           />
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
              SELF TREATEMENT CONTENT HERE
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
            <p>
              doCTOR TREATMENT CONTENT HERE
               </p>
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
            TITLE
          </p>
          <Link to="/">
          <img  className='ph--image'
           src=
           ""
           />
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
              SELF TREATEMENT CONTENT HERE
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
            <p>
              doCTOR TREATMENT CONTENT HERE
               </p>
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