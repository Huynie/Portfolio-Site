import React from 'react';
import Divider from '../assets/Divider.svg';
import { Link } from "react-router-dom";

export default function NavBar() {

    return(
        <>
             <nav>
                <Link className="logo" to={{pathname:"/"}}>Huy Chau</Link>
                <input className="toggle" type="checkbox"></input>
                <div className="hamburger">
                    <div></div>
                </div>
                <ul className="menu" id="menu">
                    {/* <li className="menu__item" id="isHidden"><Link to={{pathname:"/"}}>Home</Link></li> */}
                    <li className="menu__item"><Link to={{pathname:"/gallery"}}>Gallery</Link></li>
                    <li className="menu__item"><Link to={{pathname:"/about"}}>About</Link></li>
                    <img className="slash" src={Divider} alt="#"/>
                </ul>
            </nav>
        </>
        
    )
}