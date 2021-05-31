import React,{useState} from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import "./DailyChallenge.module.css";
import *as  FaIcon from "react-icons/fa";
export const DailyChallenge = (props) => {
    const [iscompleted,setIscompleated] = useState(false);
    const [checkUserSureness,setCheckUserSureness] = useState(false);
    return (
        <div className= 'ChallengeContenedor'  >
                <div className="ChallengeTexto">
                    <h2>Your daily challenge:</h2>
                   <p>{iscompleted ? <div style={{color: "green"}}>¡Ya completaste el reto de esta sesión!</div>  : props.challengeTexto}</p> 
                </div>
                <div className="ChallengeContenedorAcciones">
                    {!iscompleted ?
                        checkUserSureness? 
                        <div>
                            <p style={{color: "red"}}>¿Está seguro que ya completó la tarea?</p> 
                            <i  style={{color: "red"}} className="fa fa-check-square-o" aria-hidden="true" onClick={()=>{setIscompleated(true)}}></i>
                            <FaIcon.FaWindowClose style={{color: "red"}}  onClick={()=>{setCheckUserSureness(false)}}/>
                            </div> 
                            :<button onClick={()=>{setCheckUserSureness(!checkUserSureness)}}><i  className="fa fa-check-square-o" aria-hidden="true"></i></button>:
                            null
                    }
                </div>
        </div>
    )
}

export default DailyChallenge;