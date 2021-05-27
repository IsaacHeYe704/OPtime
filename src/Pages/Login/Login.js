import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import LoginModule from './Login.module.css';
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as actionCreators from "../../store/actions/";
import { connect } from "react-redux";
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
        
        <h2 className={LoginModule.message}>Welcome to OpTime!</h2>
        <h2 className={LoginModule.message}>Iniciar sesión</h2>
        <div className={LoginModule.butoncito}><button className={LoginModule.fonts}>¿No tienes cuenta? Es sencillo <Link to="SignIn">crea tu cuenta</Link></button></div>
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
                    <button className={LoginModule.ingreso}  type="submit">Ingresar</button>
               </div>
           </form> 
           <div className={LoginModule.verticalLine}/>
           <div className={LoginModule.redes}>
               <button className={LoginModule.facebook}> <FaIcons.FaFacebookF color="#FFFFFF"/>Continuar con facebook</button>
               <button className={LoginModule.google}><FcIcons.FcGoogle />Continuar con google</button>
           </div>
           </div>
           <div className={LoginModule.butoncito}>
           <button className={LoginModule.fonts} >¿Perdiste tu contraseña?</button>
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
      onUserLogin: (authData, onSuccessCallback) =>
        dispatch(actionCreators.logIn(authData, onSuccessCallback)),
      onInput:()=>{dispatch(actionCreators.setError(""))} ,
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
