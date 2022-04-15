// import logo from './logo.svg';
import './App.css';
import Component from './Component';
import { useState } from 'react';
import Header from './Header';
import Home  from './Home';
import Head from './Head';
import * as React from 'react';
import Footer from './components/Footer';
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Body from './Body';
import Lowerbody from './Lowerbody';
import Login from './Login';

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
