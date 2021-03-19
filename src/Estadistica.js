import React from "react";
import Stat from "./Estadistica.module.css";


var Estadistica = (props) =>
{
  return(
    <div className = {Stat.Estadistica} id={props.id}>
      <div className ={Stat.headerEstadistica}>
        <h3 className={Stat.tituloPestania}>{props.titulo}</h3>
      </div>
      <div className ={Stat.contenidoEstadistica}>
        <img src="../graficaRandom.png" />
      </div>
    </div>    
  );
}
export default Estadistica;