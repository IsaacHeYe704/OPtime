import React, { Component } from 'react'
import NavBarStyle from "./NavBar.module.css"; 
class NavBar extends Component {
    state= 
    {
        opened:false,
    }
    render() {
        return (
            <div className={ `${NavBarStyle.container} ${this.state.opened ? NavBarStyle.opened: null}`}>
                <h4>How do you feel</h4>
                <h4>Profile</h4>
                <h4>sign out</h4>
            </div>
        )
    }
    componentWillReceiveProps(nextProps) {
     
            this.setState({opened: this.props.opened});
    } 
}
export default NavBar
