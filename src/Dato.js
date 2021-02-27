import React,{Component} from "react";
import "./Dato.css";


class Dato extends Component
{
    render()
    {
        return(
            <div className= 'datoContenedor'>
                <div className= 'datoTexto'>
                    <h5>{this.props.genero}:</h5>
                    <p>{this.props.datoTexto}</p>
                </div>
            </div>
        );

    }

}
export default Dato;