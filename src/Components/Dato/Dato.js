import React,{Component} from "react";
import Data from "./Dato.module.css";


class Dato extends Component
{
    render()
    {
        return(
            <div className= {Data.datoContenedor}>
                <div className= {Data.datoTexto}>
                    <h5>{this.props.genero}:</h5>
                    <p>{this.props.datoTexto}</p>
                </div>
            </div>
        );

    }

}
export default Dato;