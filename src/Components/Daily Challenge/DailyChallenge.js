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
                   <p>{iscompleted? "Ya completaste el reto de esta sesión!!!"  :props.challengeTexto}</p> 
                </div>
                <div className="ChallengeContenedorAcciones">
                    {!iscompleted ?
                        checkUserSureness? 
                        <div>
                            <p>esta seguro que ya completo la tarea?</p> 
                            <i  className="fa fa-check-square-o" aria-hidden="true" onClick={()=>{setIscompleated(true)}}></i>
                            <FaIcon.FaWindowClose  onClick={()=>{setCheckUserSureness(false)}}/>
                            </div> 
                            :<button onClick={()=>{setCheckUserSureness(!checkUserSureness)}}><i  className="fa fa-check-square-o" aria-hidden="true"></i></button>:
                            null
                    }
                </div>
        </div>
    )
}

export default DailyChallenge;