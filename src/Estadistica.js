import React from "react";
import "./Estadistica.css";


var Estadistica = (props) =>
{
  return(
    <div className = "Estadistica" id={props.id}>
      <div className ='headerEstadistica'>
        <h3 className='tituloPestania'>{props.titulo}</h3>
      </div>
      <div className ='contenidoEstadistica'>
        <img src="../graficaRandom.png" />
      </div>
    </div>    
  );
}
export default Estadistica;