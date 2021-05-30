import React, { Component } from 'react'
import NavBarStyle from "./NavBar.module.css"; 
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/";
class NavBar extends Component {
    state= 
    {
        opened:false,
    }
    render() {
        return (
            <ul className={ `${NavBarStyle.container} ${this.state.opened ? NavBarStyle.opened: null}`}>
                    <li onClick={()=>{this.props.openCloseModal("showMoodSelector")}}>How do you feel</li>
                    <li>Profile</li>
                    <Link onClick={this.props.onLogOut}to="/" style={{ textDecoration: 'none' ,color: "black"}}><li>Sign Out</li></Link>
            </ul>
        )
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.opened !== this.state.opened)
        {
            this.setState({opened: nextProps.opened});
        }
        
    } 
}

  const mapDispatchToProps = (dispatch) => {
    return {
      onLogOut: () => dispatch(actionCreators.logOut()),
    };
  };
export default connect(null,mapDispatchToProps)((NavBar));
