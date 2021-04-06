
import  window from "./Pestania.module.css";

import React, { Component } from 'react'

class Pestania extends Component {
 
  componentDidMount()
  {
    // this.props.button.addEventListener("click", );
  }
  render() {
    return (
      <div className = {window.pestania}  id={this.props.id}>
        <div className ={window.headerPestania}>
          <h3 className={window.tituloPestania}>{this.props.titulo}</h3>
        </div>
        <div className ={window.contenidoPestania}>
          { this.props.children }
          {this.props.button}
        </div>
    </div> 
    )
  }
}

export default Pestania;
