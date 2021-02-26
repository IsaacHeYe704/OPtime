import React,{Component} from "react";
import "./Tarea.css";



class Tarea extends Component 
{
    render() 
    {
        return (
            <div className= 'tareaContenedor'  >
                <div className="tareaTexto">
                    <h5>{this.props.grupo}:</h5>
                   <p>{this.props.tareaTexto}</p> 
                </div>
                <div className="tareaContenedorAcciones">
                    <button><i  className="fa fa-check-square-o" aria-hidden="true"></i></button>
                    <button><i className="fa fa-play" aria-hidden="true"></i></button>
                    <button><i className="fa fa-whatsapp" aria-hidden="true"></i></button>
                </div>
            </div>
        );
    }
}
export default Tarea;