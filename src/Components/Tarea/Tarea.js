import React,{Component, useState} from "react";
import TaskStyle from "./Tarea.module.css";
import *as  FaIcon from "react-icons/fa";

class Tarea extends Component 
{
    state =
    {
        showCompleteTask: false,
    }
    iconeButtonStyle =
    {
        cursor: "pointer",  
        marginRight: '20px'
    }
    
    render() 
    {
        return (
            <div className= {TaskStyle.tareaContenedor}  >
                <div className={TaskStyle.tareaTexto}>
                    <h5>{this.props.grupo}:</h5>
                   <p>{this.props.tareaTexto}</p> 
                </div>
                
                {
                    !this.state.showCompleteTask ?
                    <div className={TaskStyle.tareaContenedorAcciones}>
                            <button onClick={this.showHideModal}><i  className="fa fa-check-square-o" aria-hidden="true"></i></button>
                            <button><i className="fa fa-play" aria-hidden="true"></i></button>
                            <button><i className="fa fa-whatsapp" aria-hidden="true" ></i></button>
                             
                    </div>
                    :
                    <div className={TaskStyle.tareaContenedorAcciones}>
                                <p style={{color: "red"}}>Esta seguro de completar esta tarea? <FaIcon.FaCheckSquare style={this.iconeButtonStyle} onClick={()=>{this.props.completeTask(this.props.id)}}/>
                                <FaIcon.FaWindowClose style={this.iconeButtonStyle} onClick={this.showHideModal}/></p>  
                       
                    </div> 
                    
                }     
                          
            </div>
        );
    }
    showHideModal=()=>
    {
        this.setState({
            showCompleteTask: !this.state.showCompleteTask
        });
    }
    
}
export default Tarea;