
import React, {Component, useState } from 'react'

import './App.css';

import{Switch}from'react-router-dom';
import{BrowserRouter}from'react-router-dom';
import{Route,Link}from'react-router-dom';

import Login from "./Pages/Login/Login";
import axios from './Instace/AxiosInstance'
import Home from './Pages/home/Home'
import SignIn from "./Pages/SignUp/SignUp"
import NotFound from "./Pages/NotFound/NotFoundPage";

class App extends Component {

  render() {
    return (
      <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/SignIn" exact render={()=><SignIn/>}/>
          <Route exact path="/" render= {()=><Login/>}/>
          <Route path="/Home" render={()=> <Home/>}/>
          <Route path="*" render={()=> <NotFound/>}/>
        </Switch>
        </BrowserRouter>
      </div>    
    )
  }
}

export default App;
