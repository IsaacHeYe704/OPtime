import React, { Component } from 'react'
import AddTaskStyle from './AddTaskStyle.module.css';
import{Route,Link}from'react-router-dom';
import * as AiIcons from"react-icons/ai";
import * as BiIcons from"react-icons/bi";
class AddTask extends Component {
    state=
    {
        
    }
    render() {
        return (
            <div className={AddTaskStyle.containerCortain}>
                <div className={AddTaskStyle.container}>
                    <h1>Add a new task</h1>
                    <Link to="/Home"><AiIcons.AiFillCloseCircle size="50px"/></Link>
                    <form onSubmit={null}>
                        <div>
                            <label htmlFor="taskText">what do you need to do?</label>
                            <textarea id="taskText" value={this.props.newTaskInfo.taskText} onChange={(event)=>{this.props.updateNewTaskInfo(event,"tareaTexto")}}></textarea>
                        </div>
                        <div>
                        <label htmlFor="areaSelector">which area is this task realted?</label>
                        <select id="areaSelector" value={this.props.newTaskInfo.area} onChange={(event)=>{this.props.updateNewTaskInfo(event,"grupo")}}>
                            <option>react</option>
                            <option>matematicas</option>
                            <option>crecimiento personal</option>
                        </select>
                        <AiIcons.AiFillPlusCircle/>
                        </div>
                        <Link to="/Home" onClick={this.props.addNewTask}><label>add task</label><BiIcons.BiTask size="50px"/></Link>
                    </form>
                </div>
                
            </div>
        )
    }
}
export default AddTask;