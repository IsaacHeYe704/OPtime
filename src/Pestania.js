import React from "react";
import Tarea from './Tarea.js';


var Pestania = (props) =>
{
  return(
    <div className = "pestania " id={props.do}>
      <div className ='headerPestania'>
        <h3 className='tituloPestania'>{props.titulo}</h3>
      </div>
      <div className ='contenidoPestania'>
        <Tarea tareaTexto='Preparar el pitch de reactjs ' grupo='React'/>
        
      </div>
    </div>    
  );
}
export default Pestania;