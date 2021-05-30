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
import axiosDb from "../../Instace/realTimedbInstace";

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
        newDataInfo: {
            datoTexto:"",
            genero:"",
        },
        showAddTask: false,
        showMoodSelector: false,
        grupos: [],
        gruposSum: [],
        challenge: "",
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

    crearData(){
        const data = {
            datoTexto:"Corovanirus",
            genero: "Muerte"
        }
        axiosDb.post("/data.json", data).then(
            console.log("holaaaa"+data)
        ) 
    }
    initializeApp()
    {
        this.getRandomFacts();
        this.getTask();
        this.getChallenge();
    }
    getRandomFacts()
    {
        let counterData = 0;
        axiosDb.get('/data.json')  
        .then(response => {
            if(response.data!=null){
                Object.values(response.data).sort( () => Math.random() - 0.5);
                var sortedArray = Object.values(response.data);
                sortedArray.sort( () => Math.random() - 0.5);
                sortedArray = [sortedArray[0],sortedArray[1],sortedArray[2]];
                
                const dataUpdate = sortedArray.map(data => {
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
        }
        });
    }
    getTask()
    {
        let counterTask = 0;
        axiosDb.get('/task.json?orderBy="email"&equalTo="'+this.props.email+'"')
        .then(response => {
            // console.log(Object.keys(response.data));
            const taskUpdate = (Object.values(response.data)).map(task => {
            counterTask+=1;
            return {
                key: counterTask,
                id: Object.keys(response.data)[counterTask-1],
                tareaTexto: task.tareaTexto,
                grupo: task.grupo,
            }
            });
            this.setState({
                TareasInfo: taskUpdate
            });
            console.log(taskUpdate);
            this.getStats(taskUpdate);
        }).catch((error)=>{console.log(error)})
    }
    getStats(tasks)
    {
        let grupos =[];
        let gruposSum =[];
        
        tasks.forEach(theTask => {
            grupos.push(theTask.grupo);
        });
        let gruposNotRepeated = new Set(grupos);
        grupos = [...gruposNotRepeated];
        this.setState({grupos: grupos});

        grupos.forEach((grupo,index) =>{
            gruposSum[index] = 0;
        });
        tasks.forEach(theTask => {
            grupos.forEach((grupo,index) =>{
                if(theTask.grupo === grupo)
                {
                    gruposSum[index] += 1;
                }
            });
        });
        this.setState({gruposSum: gruposSum});
    }
    getChallenge()
    {
        axiosDb.get('/challenge.json')
        .then(response => {
            // console.log(Object.keys(response.data));
            var responseArray = Object.values(response.data);
            var item = responseArray[Math.floor(Math.random() * responseArray.length)];
            console.log("challenge",item);
            this.setState({challenge: item.Texto});
        }).catch((error)=>{console.log(error)})
    }
    completeTask = (id)=>
    {
        let updatedTask = [...this.state.TareasInfo];
        axiosDb.delete('/task/'+id+".json")
        .then(response => {
            updatedTask = updatedTask.filter(task =>task["id"] !== id);
            console.log(updatedTask);
            this.setState({TareasInfo: updatedTask});
            console.log("eliminado")
        }).catch((error)=>{console.log(error)})
        
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
                    <Estadistica titulo='My Stats: ' grupos={this.state.grupos} gruposSum={this.state.gruposSum}></Estadistica>
                    <DailyChallenge challengeTexto={this.state.challenge}></DailyChallenge>
                </Pestania>
                <Pestania titulo='To do' id='toDo'  button={<button onClick={()=>{this.openCloseModal("showAddTask")}}  ><AiIcons.AiFillPlusCircle color='#3d3d3d' /></button>}>
                    {this.state.TareasInfo.map(tareaInfo =><Tarea completeTask={this.completeTask} {...tareaInfo}/> )}
                </Pestania>
                <Pestania titulo='Did you know' id='toknow'>
                {this.state.DataInfo.map(dataInfo => <Dato {...dataInfo}/> )}
                </Pestania>           
                </div>
                <Bottom/>
                <button onClick={this.crearData}>Hola!!!</button> 
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
        var newTask = {...this.state.newTaskInfo,
                        email: this.props.email
                    };

        (newTask['grupo']==='' )? newTask['grupo'] =document.getElementById("areaSelector").value:newTask['grupo'] =newTask['grupo'];
        //send info to firebase
        axiosDb
        .post("/task.json", newTask)
        .then((response) => {
            console.log(response);
            taskUpdated.push(newTask);
            this.setState({
            TareasInfo: taskUpdated,
            newTaskInfo:
                {
                    tareaTexto:"",
                    grupo:"",
                }
            });
        })
        .catch((error) => {
            console.log(error);
        });
        
        
    }
}
const mapStateToProps = (state) => {
    return {
      mood: state.moodStore.mood,
      isUserLogedIn: state.authStore.isUserLoggedIn,
      email: state.authStore.userLoggedIn.userName,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      onLogOut: () => dispatch(actionCreators.logOut()),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home));