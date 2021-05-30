import {Link} from 'react-router-dom';
import Style from "./NotFoundPage.module.css"
import image from "./imagen.jpg";
import "./Loading.css";

var NotFound = () => {
    return(
        
        <div className = {Style.mainContent}>
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
            <h2>Ooops...</h2>
            <p>No pudimos encontrar esta página...</p>
            <p>Prueba suerte con alguno de estos links:</p>
            <Link className={Style.homePage} to="/">Página principal </Link>
            </ul>
      </div>
     
    );
}

export default NotFound;
