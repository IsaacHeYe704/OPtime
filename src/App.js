
import React, {Component, useState } from 'react'

import './App.css';

import{BrowserRouter}from'react-router-dom';
import{Route,Link}from'react-router-dom';

import Login from "./Pages/Login/Login";
import axios from './Instace/AxiosInstance'
import Home from './Pages/home/Home'
import SignIn from "./Pages/SignUp/SignUp"

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/SignIn" exact render={()=><SignIn/>}/>
          <Route path="/" exact render= {()=><Login/>}/>
          <Route path="/Home" render={()=> <Home/>}/>
        </BrowserRouter>
      </div>
    )
  }
}






export default App;
