import logo from './logo.svg';
import Pestania from './Pestania';
import './App.css';
import "./Pestania.css"


var App = ()=>
{
  return (
    <div className="App">
      <div className='contenedorPestanias'>
        <Pestania titulo='Our services'/> 
        <Pestania titulo='To do'/>
        <Pestania titulo='Did you know'/>  
      </div>
      
    </div>
  );
}





export default App;
