import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Component from './Component';
import './Header.css';
import { selectUserName } from './userSlice';



function Header() {
 
 
    return (
        <div className="header">
          {/* <Link to="/"> */}
          <Link to="/body">
          <img id="search" className="header--logo" src="https://vcareimaging.in/wp-content/uploads/2021/11/cropped-logo-removebg-preview.png" alt="amazon"/>
          {/* </Link> */}
          </Link>
          
          
          
          <div className="header--search">
          <input className="header--searchInput" type="text" 
          // onChange={event =>{
          //   setsearchTerm(event.target.value);
          // }}
            />
             {/* {Home.filter(val=>{
            if(searchTerm == "") {
              return val;
            }
            else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
            }
        }).map((val,key)=>{
            return(
                <div className='user' key={key}>
                    <p>
                        {val.title}
                    </p>
                    </div>
            )})}  */}
         
          {/* Material UI */}
          {/* <SearchIcon className="header--searchIcon" /> */}
          </div>  
          
          <div className="header--nav">
            {/* <Link > */}
            <div  className="header--option">
  <Link to={'/login'}>
          <button   className='home--button'>Sign In</button>
          
          </Link>
          </div>
          {/* </Link> */}

            
          </div>  

    
          
          
        </div>
    )
}

export default Header;

