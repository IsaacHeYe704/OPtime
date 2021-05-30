import React,{useState,useEffect} from "react";
import Stat from "./Estadistica.module.css";
import Chart from "../chart/Chart.js"


var Estadistica = (props) =>
{
  const [labels,setLabels] = useState(props.grupos);
  const [datasets,setDatasets] = useState(props.gruposSum);
  useEffect(() => { setLabels(props.grupos);
    setDatasets(props.gruposSum);
  });
  return(
    <div className = {Stat.Estadistica} id={props.id}>
      <div className ={Stat.headerEstadistica}>
        <h3 className={Stat.tituloPestania}>{props.titulo}</h3>
      </div>
      <div className ={Stat.contenidoEstadistica}>
        {/* <img src="../graficaRandom.png" /> */}
        <Chart grupos={labels} datasets={datasets}/>
      </div>
    </div>    
  );
}
export default Estadistica;