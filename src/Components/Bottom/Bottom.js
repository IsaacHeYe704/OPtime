import React from "react";
import But from "./Bottom.module.css";
import * as actionCreators from "../../store/actions/actionAbout";


var Bottom = (props) =>
  {
    return(
      <div className = {But.Bottom} 
      // onClick={()=>{props.openCloseModal("showAbout")}}
      >
          <button>About Us</button>
          {/* <li onClick={()=>{this.props.openCloseModal("showMoodSelector")}}>About</li> */}
      </div>    
    );
  }
export default Bottom;