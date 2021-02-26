import React from "react";
import "./Header.css";


var Header = (props) =>
{
  return(
    <div className = "Header" >
        <div className='Branding'>
            <img src="../logoOP.png" alt="MDN" />
            <h1 >OP TIME</h1>
        </div>  
        <div className="profileContainer">
            <div><button><i className="fa fa-bars fa-1.6x" aria-hidden="true"></i></button><i className="fas fa-user fa-4x"></i> </div>
            <div><h4>Bienvenido Isaac</h4></div>
            
        </div>  
    </div>    
  );
}
export default Header;