// import logo from './logo.svg';
import './App.css';
import Component from './Component';
import { useState } from 'react';
import Header from './Header';
import Home  from './Home';
import Head from './Head';
import * as React from 'react';
import Footer from './Footer';
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Body from './Body';
import Lowerbody from './Lowerbody';
import Login from './Login';

import Mainpage from './Mainpage';
// import QuickReleif from './QuickReleif';
import PersonalHygiene from './PersonalHygiene';
import Yoga from './Yoga';
import QuickRelief from './QuickRelief';
import HealthyDIet from './HealthyDIet';

// import QuickR from './QuickR';
function App() {
  return (
<Router>
      <div className="App">
        <Switch>
        <Route path="/head">
          <Header />
            <Head/>        
          </Route>
          <Route path='/personalhygien'>
            <PersonalHygiene/>
          </Route>

          <Route path="/login">
          <Header />
            <Login/>        
          </Route>
          
          <Route path="/body">
          <Header />
            <Body/>        
          </Route>

          <Route path="/lowerbody">
          <Header />
            <Lowerbody/>        
          </Route>
          <Route path='/yoga'>
            <Yoga/>
          </Route>

            <Route path="/main">
              <Header />   
              <Home />
              <Footer/>
              
            </Route>  
            <Route path="/">
             <Mainpage/>
            </Route> 

            <Route path="/quickrelief">
          <QuickRelief/>       
          </Route>
          
            
          <Route path='/personalhygiene'>
            <Header/>
            <PersonalHygiene/>
          </Route>
          <Route path='/healthydiet'>
            <HealthyDIet/>
          </Route>


        </Switch>
      </div>
      
    </Router>
    

    
  );}

export default App;
