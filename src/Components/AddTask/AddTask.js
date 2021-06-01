import React, { Component } from 'react'
import AddTaskStyle from './AddTaskStyle.module.css';
import{Route,Link}from'react-router-dom';
import * as AiIcons from"react-icons/ai";
import * as BiIcons from"react-icons/bi";
class AddTask extends Component {
    
    state=
    {
        showAddTask: false,
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.showAddTask !== this.state.showAddTask) {
            this.setState({showAddTask: nextProps.showAddTask});
        }
    } 
    updateTask = () => 
    {
        this.props.addNewTask();
        this.props.openCloseModal("showAddTask");
    }
    render() {
        return (
            <>
                {this.state.showAddTask ?
                    <div className={AddTaskStyle.containerCortain} onClick={()=>{this.props.openCloseModal("showAddTask")}}>
                        <div className={AddTaskStyle.container}  onClick={ (event)=>{event.stopPropagation()}}>
                            <h1>Add a new task</h1>
                            <button onClick={()=>{this.props.openCloseModal("showAddTask")}}><AiIcons.AiFillCloseCircle size="30px"/></button>
                            <form onSubmit={null}>
                                <div>
                                    <label htmlFor="taskText">What do you need to do?</label>
                                    <textarea id="taskText" value={this.props.newTaskInfo.taskText} onChange={(event)=>{this.props.updateNewTaskInfo(event,"tareaTexto")}}></textarea>
                                </div>
                                <div>
                                <label htmlFor="areaSelector">Which area is this task related?</label>
                                <div>
                                <select id="areaSelector" value={this.props.newTaskInfo.area} onChange={(event)=>{this.props.updateNewTaskInfo(event,"grupo")}}>
                                    <option>Notas</option>
                                    <option>Trabajo</option>
                                    <option>Crecimiento Personal</option>
                                    <option>Universidad</option>
                                    <option>Compras</option>
                                </select>
                                <AiIcons.AiFillPlusCircle/>
                                </div>
                                </div>
                                <h1 onClick={this.updateTask}><BiIcons.BiTask size="50px"/></h1>
                            </form>
                        </div>
                    </div>
                    :null
                }
                
            </>
            
        )
    }
}
export default AddTask;