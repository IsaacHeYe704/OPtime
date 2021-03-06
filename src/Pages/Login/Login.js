import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import LoginModule from './Login.module.css';
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as actionCreators from "../../store/actions/";
import { connect } from "react-redux";
import Spinner from "../../Components/Spinner/Spinner"
import "./Login.css"
import FacebookLogin from 'react-facebook-login';

class Login extends Component{
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        userName: "",
        password: "",
      };

      componentWillReceiveProps(nextState) {
        this.setState({
          isUserLoggedIn: nextState.isUserLoggedIn,
        });
        if(nextState.isUserLoggedIn)
        {
            this.props.history.push("/home");
        }
        console.log("entro")
      }
      componentDidMount()
      {
        console.log("fuera")
        if(this.state.isUserLoggedIn)
        {
            this.props.history.push("/home");
            console.log("entro")
        }
      }
    updateLoginInfo = (event, type) => {
        var updatedLoginInfo = {
        ...this.state,
        };
        updatedLoginInfo[type] = event.target.value;
        this.setState({
        userName: updatedLoginInfo.userName,
        password: updatedLoginInfo.password,
        });
    };
    submitLoginForm = (e) => {
        e.preventDefault()
        const userData = {
        email: this.state.userName,
        password: this.state.password,
        };
        this.props.onUserLogin(userData, () => {
        this.props.history.push("/home");
        });
    };
      render() {
    return (
        <div>
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>        
        <h2 className={LoginModule.message}>Welcome to OpTime!</h2>
        <h2 className={LoginModule.message}>Iniciar sesión</h2>
        <div className={LoginModule.butoncito}><button className={LoginModule.fonts}>Don't have an account? It's easy <Link className={LoginModule.link} to="SignIn">Create your account</Link></button></div>
        <div className={LoginModule.componente}>
           <form onSubmit={this.submitLoginForm.bind(this)}>
               <div>
                    <p>{this.props.error && this.props.error}</p>
                    <div>
                        <input type="email" placeholder="Email" value={this.state.userName} onChange={(event) => {
                            this.updateLoginInfo(event, "userName");
                            }}/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password" value={this.state.password}  onChange={(event) => {
                        this.updateLoginInfo(event, "password");
                        }}/>
                    </div>
                    { !this.props.loadingAuth ?
                      <button className={LoginModule.ingreso}  type="submit">Ingresar</button>
                      :
                      <Spinner/>
                    }
                    
               </div>
           </form > 
           <div className={LoginModule.verticalLine}/>
           <div className={LoginModule.redes}>
             {/* <form onSubmit={this.submitLoginForm.bind(this)}> 
              <FacebookLogin
                appId="193220466010864"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook} 
                textButton="Login"
                icon="fa-facebook"
                />,
             </form> */}
               <button className={LoginModule.facebook}> <FaIcons.FaFacebookF color="#FFFFFF"/>Continuar con facebook</button>
               <button className={LoginModule.google}><FcIcons.FcGoogle />Continuar con google</button>
           </div>
           </div>
           <div className={LoginModule.butoncito}>
           <button className={LoginModule.fonts} >With Optime your time on time</button>
           </div>
           </ul>
        </div>
    )
}
}
// const responseFacebook = (response) => {
//   console.log(response);
// }
const mapStateToProps = (state) => {
    return {
      isUserLoggedIn: state.authStore.isUserLoggedIn,
      loadingAuth: state.authStore.loadingAuth, 
      error: state.authStore.error,
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {
      onUserLogin: (authData, onSuccessCallback) =>
        dispatch(actionCreators.logIn(authData, onSuccessCallback)),
      onInput:()=>{dispatch(actionCreators.setError(""))} ,
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
