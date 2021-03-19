import React from "react";
import  window from "./Pestania.module.css";

var Pestania = (props) =>
{
  return(
    <div className = {window.pestania}  id={props.id}>
      <div className ={window.headerPestania}>
        <h3 className={window.tituloPestania}>{props.titulo}</h3>
      </div>
      <div className ={window.contenidoPestania}>
        { props.children }
      </div>
    </div>    
  );
}
export default Pestania;