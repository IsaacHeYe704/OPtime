import Header from "../../Components/Header/header";
import Bottom from "../../Components/Bottom/Bottom";
import Tarea from '../../Components/Tarea/Tarea';
import Estadistica from '../../Components/Estadistica/Estadistica';
import Dato from '../../Components/Dato/Dato';
import DailyChallenge from '../../Components/Daily Challenge/DailyChallenge';
import * as AiIcons from "react-icons/ai";
import AddTask from "../../Components/AddTask/AddTask";
import Pestania from '../../Components/Pestania/Pestania';
import axios from '../../Instace/AxiosInstance'
import{Route,Link}from'react-router-dom';
import React, { Component } from 'react'
import HomeStyle from './Home.module.css'

export class Home extends Component {

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
        },
        showAddTask: false,
    }
    
    componentDidMount()
    {
        let counterData = 0;
        axios.get('Data.Json')  
        .then(response => {const dataUpdate = response.data.map(data => {
            counterData+=1;
            return { key: 
                counterData,
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
    openCloseModal = ()=>
    {
         this.setState({showAddTask: !this.state.showAddTask});
    }
    render() {
        return (
            <>
                <Header />
                <div className={HomeStyle.contenedorPestanias}>
                <Pestania titulo='Our services' > 
                    <Estadistica titulo='My Stats: '></Estadistica>
                    <DailyChallenge challengeTexto='Realiza 5 repeticiones de 10 sentadillas'></DailyChallenge>
                </Pestania>
                <Pestania titulo='To do' id='toDo'  button={<button onClick={this.openCloseModal}  ><AiIcons.AiFillPlusCircle color='#3d3d3d' /></button>}>
                    {this.state.TareasInfo.map(tareaInfo =><Tarea {...tareaInfo}/> )}
                </Pestania>
                <Pestania titulo='Did you know' id='toknow'>
                {this.state.DataInfo.map(dataInfo => <Dato {...dataInfo}/> )}
                </Pestania>           
                </div>
                <Bottom/> 
                <AddTask openCloseModal={this.openCloseModal} newTaskInfo={this.state.newTaskInfo} updateNewTaskInfo={this.updateNewTaskInfo} addNewTask={this.addNewTask} showAddTask={this.state.showAddTask}/>
            </>
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

export default Home



