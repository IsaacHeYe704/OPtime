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
                <h2>How do you feel to day</h2>
                <div>
                    <FaSadCry onClick={()=>{props.changeMood("reallySad")}} size="50px" color={props.mood === "reallySad" ?"#3496eb":"black"}/>
                    <HiEmojiSad onClick={()=>{props.changeMood("sad")}} size="50px" color={props.mood === "sad" ?"#3496eb":"black"}/>
                    <HiEmojiHappy onClick={()=>{props.changeMood("happy")}} size="50px" color={props.mood === "happy" ?"#3496eb":"black"}/>
                    <ImHappy2 onClick={()=>{props.changeMood("reallyHappy")}}size="50px" color={props.mood === "reallyHappy" ?"#3496eb":"black"}/>
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