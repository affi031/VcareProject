import React, { useState } from 'react';
import { auth,provider } from './firebase';
import './Mainpage.css';
import { Link } from 'react-router-dom';

const Mainpage = () => {
  const [agree, setAgree] = useState(false);

  

  // When the button is clicked
  const btnHandler = () => {
    setAgree(!agree);
      auth.signInWithPopup(provider)
      .then((result) =>{
    
       
           
        console.log(result)
      })
      .catch(error => alert(error.message))
    
  };

  return (
    <div className="Mainpage">
      <div className="container">
        <div>
          <input type="checkbox" id="agree" onChange={btnHandler} />
          <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
        </div>

        {/* Don't miss the exclamation mark* */}
        <Link to="/main">
        <button disabled={!agree} className="btn" >
          Continue
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Mainpage;