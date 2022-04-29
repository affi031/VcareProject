
import React from 'react'
import './Home.css';
import Diseases from './Diseases';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Home() {

    return (
        <div className="home">
          <div className='image--container--class'></div>
        <div className="home--container">
          <div className='image-conatiner--class'>
             <div className='image--container'>
                
         
          <img className="home--image1" src="https://asclepius.ancorathemes.com/splash/src/img/hero/left/2.jpg" ></img>
          
          
         
          <img className='home--image2 ' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/1.jpg'></img>
          <img className='home--image3' src='https://asclepius.ancorathemes.com/splash/src/img/hero/left/4.jpg'></img>
          <img className='home--image4' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/4.jpg'></img>
          <img className='home--image5' src='https://asclepius.ancorathemes.com/splash/src/img/hero/left/6.jpg'></img>
          
         
          {/* <img className='home--image8' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/2.jpg'></img> */}
          <img className='home--image6' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/3.png'></img>
          {/* <img className='home--image7' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/6.jpg'></img> */}

          </div>
          <Link to="/">
          <img className='home--imagecenter' src='https://asclepius.ancorathemes.com/splash/src/img/logo.svg'></img>
          </Link>
          <p className='home--text'>Vcare,Check Your Solutions Here</p>
          
          <div className='image--container'>
                
         
          <img className="home--image1" src="https://asclepius.ancorathemes.com/splash/src/img/demo/3.jpg" ></img>  
          <img className='home--image2 ' src='https://asclepius.ancorathemes.com/splash/src/img/demo/8.jpg'></img>
          <img className='home--image3' src='https://asclepius.ancorathemes.com/splash/src/img/demo/9.jpg'></img>
          <img className='home--image4' src='https://asclepius.ancorathemes.com/splash/src/img/demo/13.jpg'></img>
          {/* <img className='home--image5' src='https://asclepius.ancorathemes.com/splash/src/img/demo/2.jpg'></img> */}
          
         
          {/* <img className='home--image8' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/2.jpg'></img> */}
          <img className='home--image6' src='https://asclepius.ancorathemes.com/splash/src/img/demo/2.jpg'></img>
          {/* <img className='home--image7' src='https://asclepius.ancorathemes.com/splash/src/img/hero/right/6.jpg'></img> */}

          </div>
          </div>
          
          <div className="home--row--class">
          
            <div className='home--row--container'>
            <div className="home--row">
              <h4 className='top--title'>HEAD</h4>
               <Link to="./head">
                  
                <Diseases 
                
               info="Click Here To CHeck Diseases Related To Head."
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYt6gsJ0vwS7g2spmfsHnVUd2tl08mzlu47Q&usqp=CAU"  
               />
               
               </Link>
              </div>
              <div className="home--row">
              
               <Link to="./head">
                  
                <Diseases 
                
               info="Click Here To CHeck Diseases Related To Head."
               image="https://www.prints-online.com/p/164/anatomy-head-throat-609838.jpg.webp"  
               />
               
               </Link>
               <h4 className='bottom--title'>HEAD</h4>
              </div>
                 <div className="home--row">
                 <h4 className='top--title'>Body</h4>
               <Link to="/body">
              <Diseases 
             
               info="Click Here To CHeck 
               Diseases Related To Body."
               image="https://thumb.mp-farm.com/00444232/preview.jpg"
               />
               </Link>
                 </div>
                 <div className="home--row">
               <Link to="/personalhygiene">
                  
                <Diseases 
               
               info="Click Here To CHeck Diseases Related To Head."
               image="https://cdn5.vectorstock.com/i/1000x1000/52/59/healthy-personal-hygiene-background-vector-12585259.jpg"  
               />
               
               </Link>
               <h4 className='bottom--title'>personal hygiene</h4>

              </div>
         </div>

{/* Second row of home --row class */}

                 <div className='home--row--container'>
            <div className="home--row">
            <Link to="./quickrelief">
                  
                <Diseases 
               
               info="Click Here To CHeck Diseases Related To Head."
               image="https://cdn.dribbble.com/users/535/screenshots/642918/quickrelief.png"
               />
               
               </Link>
               <h4 className='bottom--title'>Quick Relief</h4>
              </div>
                 <div className="home--row">
               <Link to="/body">
              <Diseases 
              
               info="Click Here To CHeck 
               Diseases Related To Body."
               image="https://scontent.fbom51-1.fna.fbcdn.net/v/t1.18169-9/69866_151413974900531_7782621_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=103&ccb=1-5&_nc_sid=7aed08&_nc_ohc=toVhc1RSsNIAX-DHfBf&_nc_ht=scontent.fbom51-1.fna&oh=00_AT-BiwenYWgPBNn37cYS42_BcKMCAyhxdyWgzv6fLO7acg&oe=627A19F0"
               />
               </Link>
                 </div>
              
              
                 <div className="home--row">
               <Link to="/lowerbody">
              <Diseases 
              
               info="Click Here To CHeck Diseases Related To LowerBody."
               image="https://www.researchgate.net/publication/333898976/figure/fig1/AS:771855384338432@1561036072182/Brief-anatomy-of-lower-body-bone-structure-of-human-body-3.png"
               />
               </Link>
                 </div>
                 </div>
                 <div className='Footer'>
                 
        <div className='Footer--component'>
        <p className='footer--title'>You Can coonect us through ..</p>
        <a href='#'>
          <TwitterIcon className='twitter--icon  Icon'/>
          </a>
         
          <a href='#'>
          <InstagramIcon className='Insta--icon  Icon'/>
          </a>

          <a href='#'>
          <FacebookIcon className='Fb--icon  Icon'/>
          </a>

          <a href='#'>
          <YouTubeIcon className='Yt--icon  Icon'/>
          </a>

          
        </div>
    </div>

               
          </div>

            </div>
          
        </div>  
        
    )
}

export default Home
