import React, { Component } from 'react';

import { Link, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import SignUpStyle from './SignUp.module.css';
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";

import * as actionCreators from "../../store/actions/";

class SignUp extends Component{
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: "",
        password: "",
        name:"",
        confirmPassword:"",
        error: ""
      };
      updateSignUpInfo = (event, type) => {
        var updatedLoginInfo = {
          ...this.state,
        };
    
        updatedLoginInfo[type] = event.target.value;
    
        this.setState({
          userName: updatedLoginInfo.userName,
          password: updatedLoginInfo.password,
          name:  updatedLoginInfo.name,
          confirmPassword: updatedLoginInfo.confirmPassword
        });
      };
      componentWillReceiveProps(nextState) {
        this.setState({
          error: nextState.error,
          isUserLoggedIn: nextState.isUserLoggedIn,
        });
        if(this.state.isUserLoggedIn)
        {
            this.props.history.push("/home");
        }
      }
      componentDidMount()
      {
        if(this.state.isUserLoggedIn)
        {
            this.props.history.push("/home");
        }
      }
      submitSignUpForm = (e) => {
        e.preventDefault()
        const userData = {
            
            email: this.state.userName,
            password: this.state.password,
        };
        if(this.state.password === this.state.confirmPassword)
        {
            this.props.onUserSignUp(userData, () => {
                this.props.history.push("/home");
            });
        }else
        {
            this.setState({error: "Your passwords dont match"});
        }
        
    };
    render() {
    return (
        <div>
        <h2 className={SignUpStyle.message}>Welcome to OpTime!</h2>
        <h2 className={SignUpStyle.message}>Create an acount</h2>
        <div className={SignUpStyle.butoncito}><button className={SignUpStyle.fonts}>¿Ya tienes cuenta? <Link to="/">inicia sesion </Link></button></div>
        <div className={SignUpStyle.componente}>
           <form onSubmit={this.submitSignUpForm.bind(this)}>
               <div>
                   <p>{this.state.error && this.state.error }</p>
                    <div>
                        <input type="text" placeholder="Name" value={this.state.name} onChange={(event) => {
                            this.updateSignUpInfo(event, "name");
                            this.props.onInput();
                        }}/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email"
                            value={this.state.userName}
                            onChange={(event) => {
                                this.updateSignUpInfo(event, "userName");
                                this.props.onInput();
                            }}
                        />
                    </div>
                    <div>
                        <input type="password" placeholder="Password"
                        value={this.state.password}
                        onChange={(event) => {
                            this.updateSignUpInfo(event, "password");
                            this.props.onInput();
                          }}/>
                    </div>
                    <div>
                        <input type="password" placeholder="Confirm password"
                        value={this.state.confirmPassword}
                        onChange={(event) => {
                            this.updateSignUpInfo(event, "confirmPassword");
                            this.props.onInput();
                          }}/>
                    </div>
                    <button className={SignUpStyle.ingreso} type="submit">Ingresar</button>
               </div>
           </form> 
           <div className={SignUpStyle.verticalLine}/>
           <div className={SignUpStyle.redes}>
               <button className={SignUpStyle.facebook}> <FaIcons.FaFacebookF color="#FFFFFF"/>LogIn with facebook</button>
               <button className={SignUpStyle.google}><FcIcons.FcGoogle />LogIn with google</button>
           </div>
           </div>
           <div className={SignUpStyle.butoncito}>
           <button className={SignUpStyle.fonts}>¿Perdiste tu contraseña?</button>
           </div>
        </div>
    )
}
}
const mapStateToProps = (state) => {
    return {
      isUserLoggedIn: state.authStore.isUserLoggedIn,
      loadingAuth: state.authStore.loadingAuth,
      error: state.authStore.error,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onUserSignUp: (authData, onSuccessCallback) =>
        dispatch(actionCreators.signUp(authData, onSuccessCallback)),
      onInput:()=>{dispatch(actionCreators.setError(""))} , 
    };
  };  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
