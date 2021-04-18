import React, { Component } from 'react';

import { Link, Route, withRouter } from 'react-router-dom';
import SignUpStyle from './SignUp.module.css';
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";

class SignUp extends Component{

    submitForm (e) {
        e.preventDefault()
        this.props.history.push('/Home');
      }
      render() {
    return (
        <div>
        <h2 className={SignUpStyle.message}>Welcome to OpTime!</h2>
        <h2 className={SignUpStyle.message}>Create an acount</h2>
        <div className={SignUpStyle.butoncito}><button className={SignUpStyle.fonts}>¿Ya tienes cuenta? <Link to="/">inicia sesion </Link></button></div>
        <div className={SignUpStyle.componente}>
           <form onSubmit={this.submitForm.bind(this)}>
               <div>
                    <div>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div>
                        <input type="password" placeholder="Confirm password"/>
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

export default withRouter(SignUp);
