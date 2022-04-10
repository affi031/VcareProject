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

function App() {
  return (
<Router>
      <div className="App">
        <Switch>
        <Route path="/head">
          <Header />
            <Head/>        
          </Route>
            <Route path="/">
              <Header />   
              <Home />
              <Footer/>
    
            </Route>   
        </Switch>
      </div>
      
    </Router>
    

    
  );}

export default App;
