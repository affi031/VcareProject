// import logo from './logo.svg';
import './App.css';
import Component from './Component';
import { useState } from 'react';
import Header from './Header';
import Home  from './Home';
import Head from './Head';
import * as React from 'react';

// import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Body from './Body';
import Lowerbody from './Lowerbody';
import Login from './Login';

import Mainpage from './Mainpage';
function App() {
  return (
<Router>
      <div className="App">
        <Switch>
        <Route path="/head">
          <Header />
            <Head/>        
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
            <Route path="/main">
              <Header />   
              <Home />
              
            </Route>  
            <Route path="/">
             <Mainpage/>
            </Route> 
        </Switch>
      </div>
      
    </Router>
    

    
  );}

export default App;
