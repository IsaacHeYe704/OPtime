import logo from './logo.svg';
import Pestania from './Pestania';
import './App.css';
import "./Pestania.css";
import Header from "./header";
import Bottom from "./Bottom";


var App = ()=>
{
  return (
    <div className="App">
      <Header />
      <div className='contenedorPestanias'>
        <Pestania titulo='Our services' /> 
        <Pestania titulo='To do' id='toDo'/>
        <Pestania titulo='Did you know'/>  
      </div>
      <Bottom />
    </div>
  );
}





export default App;
