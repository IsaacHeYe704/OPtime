import React,{Component} from "react";
import Homework from "./Tarea.module.css";



class Tarea extends Component 
{
    render() 
    {
        return (
            <div className= {Homework.tareaContenedor}  >
                <div className={Homework.tareaTexto}>
                    <h5>{this.props.grupo}:</h5>
                   <p>{this.props.tareaTexto}</p> 
                </div>
                <div className={Homework.tareaContenedorAcciones}>
                    <button><i  className="fa fa-check-square-o" aria-hidden="true"></i></button>
                    <button><i className="fa fa-play" aria-hidden="true"></i></button>
                    <button><i className="fa fa-whatsapp" aria-hidden="true"></i></button>
                </div>
            </div>
        );
    }
}
export default Tarea;