import logo from './logo.svg';

import Pestania from './Pestania';
import './App.css';
import "./Pestania.css";
import Header from "./header";
import Bottom from "./Bottom";
import Tarea from './Tarea';
import Estadistica from './Estadistica';


const TareasInfo = [
  {
    tareaTexto:'Preparar el pitch de reactjs ' ,
    grupo:'React'
  },
  {
    tareaTexto:'Estudiar los temas 1 y 2 para el parcial' ,
    grupo:'Probabilidad y estadistica'
  },
  {
    tareaTexto:'Revisar diapositivas' ,
    grupo:'Gestion de redes'
  },
  {
    tareaTexto:'Pagar matricula' ,
    grupo:'Universidad de la Sabana'
  }, {
    tareaTexto:'Revisar de nuevo la grabación del 24-02-2021' ,
    grupo:'calculo'
  },
];
const Tareas = TareasInfo.map(tareaInfo =><Tarea {...tareaInfo}/> );



var App = ()=>
{
  return (
    <div className="App">
      <Header />
      <div className='contenedorPestanias'>
        <Pestania titulo='Our services' > 
          <Estadistica titulo='your stats'></Estadistica>
        </Pestania> 
        <Pestania titulo='To do' id='toDo'>
          {Tareas}
        </Pestania>
        <Pestania titulo='Did you know'/>  
      </div>
      <Bottom />
    </div>
  );
}




export default App;
