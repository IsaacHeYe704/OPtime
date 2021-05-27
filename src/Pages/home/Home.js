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
import React, { Component } from 'react'
import HomeStyle from './Home.module.css'
import { connect } from "react-redux";
import MoodSelector from "../../Components/MoodSelector/MoodSelector"
import { withRouter } from 'react-router-dom';
import * as actionCreators from "../../store/actions/";
export class Home extends Component {
    state=
    {
        DataInfo: [
        ],
        isUserLogedIn: this.props.isUserLogedIn,
        TareasInfo: [
        ],
        newTaskInfo:
        {
            tareaTexto:"",
            grupo:"",
        },
        showAddTask: false,
        showMoodSelector: false,
    }
    componentDidMount()
    {
        if(!this.props.isUserLogedIn)
        {
            this.props.history.push('/');
        }else
        {
            this.initializeApp();
        }
    }
    initializeApp()
    {
        let counterData = 0;
        axios.get('Data.Json')  
        .then(response => {const dataUpdate = response.data.map(data => {
            counterData+=1;
            return { 
                key: counterData,
                id: counterData,
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
                id: counterTask,
                tareaTexto: task.tareaTexto,
                grupo: task.grupo,
            }
            });
            this.setState({
                TareasInfo: taskUpdate
            });
        })
    }
    completeTask = (id)=>
    {
        let updatedTask = [...this.state.TareasInfo]
        updatedTask = updatedTask.filter(task =>task["key"] !== id);
        console.log(updatedTask);
        this.setState({TareasInfo: updatedTask});
    }
    openCloseModal = (modalName)=>
    {
        if(modalName==="showAddTask")
        {
            this.setState({showAddTask: !this.state.showAddTask});
        }
        if(modalName === "showMoodSelector")
        {
            this.setState({showMoodSelector: !this.state.showMoodSelector});
        }
        
    }

    render() {
        return (
            <div  className={this.props.mood!=="" ? this.props.mood +"BackGround": "body"}>
                <Header openCloseModal={(modal)=>{this.openCloseModal(modal)}}/>
                <div className={HomeStyle.contenedorPestanias} className={this.props.mood}>
                <Pestania titulo='Our services' > 
                    <Estadistica titulo='My Stats: '></Estadistica>
                    <DailyChallenge challengeTexto='Realiza 5 repeticiones de 10 sentadillas'></DailyChallenge>
                </Pestania>
                <Pestania titulo='To do' id='toDo'  button={<button onClick={()=>{this.openCloseModal("showAddTask")}}  ><AiIcons.AiFillPlusCircle color='#3d3d3d' /></button>}>
                    {this.state.TareasInfo.map(tareaInfo =><Tarea completeTask={this.completeTask} {...tareaInfo}/> )}
                </Pestania>
                <Pestania titulo='Did you know' id='toknow'>
                {this.state.DataInfo.map(dataInfo => <Dato {...dataInfo}/> )}
                </Pestania>           
                </div>
                <Bottom/> 
                <AddTask openCloseModal={this.openCloseModal} newTaskInfo={this.state.newTaskInfo} updateNewTaskInfo={this.updateNewTaskInfo} addNewTask={this.addNewTask} showAddTask={this.state.showAddTask}/>
                {this.state.showMoodSelector ? <MoodSelector openCloseModal={(modal)=>{this.openCloseModal(modal)}}/>:null} 
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
const mapStateToProps = (state) => {
    return {
      mood: state.moodStore.mood,
      isUserLogedIn: state.authStore.isUserLoggedIn,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      onLogOut: () => dispatch(actionCreators.logOut()),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home));