import React from "react";
import Tarea from './Tarea.js';


var Pestania = (props) =>
{
  return(
    <div className = "pestania " id={props.id}>
      <div className ='headerPestania'>
        <h3 className='tituloPestania'>{props.titulo}</h3>
      </div>
      <div className ='contenidoPestania'>
        { props.children }
      </div>
    </div>    
  );
}
export default Pestania;