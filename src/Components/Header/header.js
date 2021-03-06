import React, { Component } from 'react'
import Head from "./Header.module.css";
import NavBar from "./NavBar/NavBar";
import { connect } from "react-redux";
class header extends Component {
  state =
  {
    opened: false
  }
  render() {
    return (
      <div className = {Head.Header} >
        <div className={Head.Branding}>
            <img src="../logoOP.png" alt="MDN" />
            <h1 >OP TIME</h1>
        </div>  
        <div className={Head.profileContainer}>
            <div><button onClick={()=>{this.setState({opened: !this.state.opened})}}><i className="fa fa-bars fa-1.6x" aria-hidden="true"></i></button><i  id ={Head.user} className="fas fa-user fa-4x"></i> </div>
            <div className={Head.bienve}><h4>Bienvenido {this.props.profileName}</h4></div>
                
        </div>  
        <NavBar opened={this.state.opened} openCloseModal={(modal)=>{this.props.openCloseModal(modal)}}/>
    </div>    
    )
  }
}
const mapStateToProps = (state) => {
  return {
    mood: state.moodStore.mood,
    isUserLogedIn: state.authStore.isUserLoggedIn,
    profileName:  state.authStore.name,
  };
};

export default connect(mapStateToProps)(header);
