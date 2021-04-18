
import React, {Component, useState } from 'react'

import './App.css';

import{BrowserRouter}from'react-router-dom';
import{Route,Link}from'react-router-dom';

import Login from "./Components/Login/Login";
import axios from './Instace/AxiosInstance'
import Home from './Pages/home/Home'
import SignIn from "./Components/SignUp/SignUp"

class App extends Component {

     
  
  
  render() {
    return (
      <div className="App">
        
      <BrowserRouter>
        <Route path="/SignIn"><SignIn/></Route>
        <Route path="/" exact>
        <Login/>
        </Route>
        <Route path="/Home" render={()=> <Home  />}/>  
      </BrowserRouter>
    </div>
    )
  }
}






export default App;
