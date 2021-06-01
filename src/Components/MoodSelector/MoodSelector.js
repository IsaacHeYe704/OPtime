import React from 'react'
import MoodSelectorStyle from './MoodSelector.module.css'
import { HiEmojiHappy } from 'react-icons/hi';
import { HiEmojiSad } from 'react-icons/hi';
import { ImHappy2 } from 'react-icons/im';
import { FaSadCry } from 'react-icons/fa';
import * as actionCreators from "../../store/actions/userMood";
import { connect } from "react-redux";
const MoodSelector = (props) => {
    return (
        <div className={MoodSelectorStyle.cortain} onClick={()=>{props.openCloseModal("showMoodSelector")}} >
            <div className={MoodSelectorStyle.container} onClick={ (event)=>{event.stopPropagation()}}>
                <h2>How do you feel today?</h2>
                <div className={MoodSelectorStyle.emoji}>
                    <FaSadCry onClick={()=>{props.changeMood("reallySad")}} className={MoodSelectorStyle.sad} size="50px" color={props.mood === "reallySad" ?"rgb(88 48 48)":"black"}/>
                    <HiEmojiSad onClick={()=>{props.changeMood("sad")} } size="50px" color={props.mood === "sad" ?"rgb(88 48 48)":"black"}/>
                    <HiEmojiHappy onClick={()=>{props.changeMood("happy")}} size="50px" color={props.mood === "happy" ?"rgb(88 48 48)":"black"}/>
                    <ImHappy2 onClick={()=>{props.changeMood("reallyHappy")}} className={MoodSelectorStyle.happy} size="39px" color={props.mood === "reallyHappy" ?"rgb(88 48 48)":"black"}/>
                </div>
               
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMood: (mood) => dispatch(actionCreators.increment({mood:mood})),
    };
};
const mapStateToProps = (state) => {
    return {
      mood: state.moodStore.mood,
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(MoodSelector);