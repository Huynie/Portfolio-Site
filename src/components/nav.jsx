import React from 'react';
import Divider from '../assets/Divider.svg';
import { Link } from "react-router-dom";

export default function NavBar() {

    return(
        <>
             <nav>
                <Link className="logo" to={{pathname:"/"}}>Huy Chau</Link>
                <ul>
                    <li className="menu" id="isHidden"><Link to={{pathname:"/"}}>Home</Link></li>
                    <li className="pageTitle"><Link to={{pathname:"/gallery"}}>Work</Link></li>
                    <li className="menu"><Link to={{pathname:"/about"}}>About</Link></li>
                    <img className="slash" src={Divider} alt="#"></img>
                </ul>
                <button type="menu" className="hamburger"></button>
            </nav>
        </>
        
    )
}