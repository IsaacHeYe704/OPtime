import React, { Component } from 'react'
import NavBarStyle from "./NavBar.module.css"; 
import {Link} from "react-router-dom"
class NavBar extends Component {
    state= 
    {
        opened:false,
    }
    render() {
        return (
            <ul className={ `${NavBarStyle.container} ${this.state.opened ? NavBarStyle.opened: null}`}>
                    <li>How do you feel</li>
                    <li>Profile</li>
                    <Link to="/" style={{ textDecoration: 'none' ,color: "black"}}><li>sign out</li></Link>
            </ul>
        )
    }
    componentWillReceiveProps(nextProps) {
            this.setState({opened: this.props.opened});
    } 
}
export default NavBar
