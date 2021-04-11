
import React, {Component, useState } from 'react'
import Pestania from './Pestania';
import './App.css';
import Header from "./header";
import Bottom from "./Bottom";
import Tarea from './Tarea';
import Estadistica from './Estadistica';
import Dato from './Dato';
import DailyChallenge from './DailyChallenge';
import{BrowserRouter}from'react-router-dom';
import{Route,Link}from'react-router-dom';
import AddTask from "./Components/AddTask/AddTask";
import Login from "./Components/Login/Login";
import axios from './Instace/AxiosInstance'

  


const DatosInfo = [
  {
    datoTexto:'100 muertos por Corovanirus',
    genero:'Salud'
  },
  {
    datoTexto:'¿Qué tiene que saber para la asignación de su cita de vacunación? Antes que nada, recuerde que la vacuna contra el covid-19 es gratuita y que su aplicación no es obligatoria, pero, como indica la Secretaría de Salud, “es una responsabilidad social con el cuidado de los demás”. También tenga en cuenta que solo las EPS, coordinadas y supervisadas por la Secretaría de Salud, aplicarán la vacuna.',
    genero:'Salud'
  },
];
const Datos = DatosInfo.map(datosInfo => <Dato {...datosInfo}/> );

class App extends Component {

      state= 
      {
        TareasInfo: [
        ],
        newTaskInfo:
        {
            tareaTexto:"",
            grupo:"",
        }
      }


      componentDidMount(){
      let counter = 0;
      axios.get('Task.Json')
      .then(response => {
        const usersUpdate = response.data.map(task => {
          counter+=1;
         
          return {
            tareaTexto: task.tareaTexto,
            grupo: task.grupo,
          }
          
        });
      })
      }
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Route path="/" exact>
        <Login/>
        </Route>
        
           
      <Route path="/Home">
      <Header />
      <div className='contenedorPestanias'>

        <Pestania titulo='Our services' > 
          <Estadistica titulo='My Stats: '></Estadistica>
          <DailyChallenge challengeTexto='Realiza 5 repeticiones de 10 sentadillas'></DailyChallenge>
        </Pestania>

        <Pestania titulo='To do' id='toDo' button={<Link to='/Home/addTask'><button >add</button></Link>}>
          {this.state.TareasInfo.map(tareaInfo =><Tarea  {...tareaInfo}/> )}
        </Pestania>

        <Pestania titulo='Did you know' id='toknow'>
        {Datos}   
        </Pestania> 
        <Route path="/Home/addTask" exact>
          <AddTask newTaskInfo={this.state.newTaskInfo} updateNewTaskInfo={this.updateNewTaskInfo} addNewTask={this.addNewTask}/>
        </Route>          
        </div>
        <Bottom/>
      </Route>    
      </BrowserRouter>
    </div>
    )
  }
  updateNewTaskInfo = (event,info) =>
  {
    var updateInfo = 
    {
      ...this.state.newTaskInfo
    }
    updateInfo[info]= event.target.value;

    this.setState({
      newTaskInfo: updateInfo
    });
  }

  addNewTask=()=>
  {
    var taskUpdated = [...this.state.TareasInfo];
    var newTask = {...this.state.newTaskInfo};
    (newTask['grupo']==='' )? newTask['grupo'] =document.getElementById("areaSelector").value:newTask['grupo'] =newTask['grupo'];
    taskUpdated.push(newTask);
    this.setState({
      TareasInfo: taskUpdated,
      newTaskInfo:
        {
          tareaTexto:"",
            grupo:"",
        }
    });
  }
}






export default App;
