import React,{Component} from "react";
import But from "./Bottom.module.css";
import AddTaskStyle from '../AddTask/AddTaskStyle.module.css';

import * as AiIcons from"react-icons/ai";
import * as BiIcons from"react-icons/bi";

class Bottom extends Component {
    
  state=
  {
      showAbout: false,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.showAbout !== this.state.showAbout) {
        this.setState({showAbout: nextProps.showAbout});
    }
} 
  updateAbout = () => 
    {
        this.props.openCloseModal("showAbout");
    }
  render(){
    return(
      <>
      <button className = {But.Bottom} onClick={()=>{this.props.openCloseModal("showAbout")}} >About Us</button>
      {this.state.showAbout ?
      <div className={But.containerCortain} onClick={()=>{this.props.openCloseModal("showAbout")}}>
      <div className={But.container}  onClick={ (event)=>{event.stopPropagation()}}>
        <div>
          <h1 >About Us</h1>
          <p>Nuestro equipo está comprometido con la optimización del tiempo de nuestros usuarios. Por esta razón ofrecemos soluciones que los ayuden a mejorar en sus horarios.</p>
          <button onClick={()=>{this.props.openCloseModal("showAbout")}}><AiIcons.AiFillCloseCircle size="30px"/></button>
        </div>
      </div>
  </div>
      :null
      }
      </>   
    );
  }
}
export default Bottom;