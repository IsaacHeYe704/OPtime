
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
import * as AiIcons from "react-icons/ai";


class App extends Component {

      state= 
      {
        DataInfo: [
        ],

        TareasInfo: [
        ],
        newTaskInfo:
        {
            tareaTexto:"",
            grupo:"",
        }
      }
      
  componentDidMount(){

        let counterData = 0;
        axios.get('Data.Json')  
        .then(response => {
          const dataUpdate = response.data.map(data => {
            counterData+=1;
            return {
              key: counterData,
              datoTexto: data.datoTexto,
              genero: data.genero
            }
          });
          this.setState({
            DataInfo: dataUpdate
          })
        });
        let counterTask = 0;
        axios.get('Task.Json')
        .then(response => {
          const taskUpdate = response.data.map(task => {
            counterTask+=1;
          
            return {
              key: counterTask,
              tareaTexto: task.tareaTexto,
              grupo: task.grupo,
            }
            
          });
          this.setState({
            TareasInfo: taskUpdate
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

        <Pestania titulo='To do' id='toDo' button={<Link className="addTaskButton" to='/Home/addTask'><AiIcons.AiFillPlusCircle color='#3d3d3d' /></Link>}>
          {this.state.TareasInfo.map(tareaInfo =><Tarea {...tareaInfo}/> )}
        </Pestania>

        <Pestania titulo='Did you know' id='toknow'>
        {this.state.DataInfo.map(dataInfo => <Dato {...dataInfo}/> )}
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
