import {Link} from 'react-router-dom';
import Style from "./NotFoundPage.module.css"
import image from "./imagen.jpg";
import "./Loading.css";
import React,{useState} from "react";
import Home from "../home/Home";

var NotFound = (props) => {
    const [isLoged,setIsLoged] = useState(false);
    return(
        <div className = {Style.mainContent}>
        { isLoged ?
        <ul className="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        <img className = {Style.imagen} src={image}></img>
            <p/><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h2 className={Style.message}>Ooops...</h2>
            <p className={Style.message}>No pudimos encontrar esta página...</p>
            <p className={Style.message}> Prueba suerte con alguno de estos links:</p>
            <Link className={Style.homePage} to="/">Página principal </Link>
            </ul>
        : 
        <ul className="background">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        <img className = {Style.imagen} src={image}></img>
            <p/><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h2 className={Style.message}>Ooops...</h2>
            <p className={Style.message}>No pudimos encontrar esta página...</p>
            <p className={Style.message}>Prueba suerte con alguno de estos links:</p>
            <Link className={Style.homePage} to="/">Iniciar sesión </Link>
            </ul>
        }
      </div>
     
    );
}

export default NotFound;
