import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import LoginModule from './Login.module.css';
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";

class Login extends Component{

    submitForm (e) {
        e.preventDefault()
        this.props.history.push('/Home');
      }
      render() {
    return (
        <div>
        <h2 className={LoginModule.message}>Welcome to OpTime!</h2>
        <h2 className={LoginModule.message}>Iniciar sesión</h2>
        <div className={LoginModule.butoncito}><button className={LoginModule.fonts}>¿No tienes cuenta? Es sencillo</button></div>
        <div className={LoginModule.componente}>
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
                    <button className={LoginModule.ingreso} type="submit">Ingresar</button>
               </div>
           </form> 
           <div className={LoginModule.verticalLine}/>
           <div className={LoginModule.redes}>
               <button className={LoginModule.facebook}> <FaIcons.FaFacebookF color="#FFFFFF"/>Continuar con facebook</button>
               <button className={LoginModule.google}><FcIcons.FcGoogle />Continuar con google</button>
           </div>
           </div>
           <div className={LoginModule.butoncito}>
           <button className={LoginModule.fonts}>¿Perdiste tu contraseña?</button>
           </div>
        </div>
    )
}
}

export default withRouter(Login);
