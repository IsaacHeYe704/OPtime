import React,{Component} from "react";
import "./DailyChallenge.css";

class DailyChallenge extends Component 
{
    render() 
    {
        return (
            <div className= 'ChallengeContenedor'  >
                <div className="ChallengeTexto">
                    <h2>Your daily challenge:</h2>
                   <p>{this.props.challengeTexto}</p> 
                </div>
                <div className="ChallengeContenedorAcciones">
                    <button><i  className="fa fa-check-square-o" aria-hidden="true"></i></button>
                </div>
            </div>
        );
    }
}
export default DailyChallenge;