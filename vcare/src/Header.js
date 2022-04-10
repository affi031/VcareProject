import React, { useState } from 'react';
import Component from './Component';
import './Header.css';
import Home from './Home';
// import Component from './Component';
// import Home from './Home';
import JSONDATA from './MOCK_DATA.json'
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Link } from 'react-router-dom';


function Header() {

  const[searchTerm ,setsearchTerm]=useState("");
 
    return (
        <div className="header">
          {/* <Link to="/"> */}
          <img id="search" className="header--logo" src="https://vcareimaging.in/wp-content/uploads/2021/11/cropped-logo-removebg-preview.png" alt="amazon"/>
          {/* </Link> */}
          
          
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
            <span className="header--optionLineOne">Hello </span>
            <span className="header--optionLineTwo">User</span>
          </div>
          {/* </Link> */}

            <div className="header--option">
            <span className="header--optionLineOne">Return</span>
            <span className="header--optionLineTwo">& Order</span>
            </div>

            <div className="header--option">
            <span className="header--optionLineOne">Your</span>
            <span className="header--optionLineTwo">Prime</span>
            </div>
          </div>  

    
          
          
        </div>
    )
}

export default Header;

