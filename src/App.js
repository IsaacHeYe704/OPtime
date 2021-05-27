
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
import { connect } from "react-redux";

import * as actionCreators from "./store/actions/";
class App extends Component {
  componentDidMount = () => {
    this.props.onPersistAuthentication();
  };
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
const mapDispatchToProps = (dispatch) => {
  return {
    onPersistAuthentication: () =>
      dispatch(actionCreators.persistAuthentication()),
  };
};

export default connect(null, mapDispatchToProps)(App);
