import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Login extends Component{

    submitForm (e) {
        e.preventDefault()
        this.props.history.push('/Home');
      }
      render() {
    return (
        <div>
           <form onSubmit={this.submitForm.bind(this)}>
               <div className="form">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password"/>
                        <button type="submit">Ingresar</button>
                    </div>
               </div>
           </form> 
        </div>
    )
}
}

export default withRouter(Login);
