import React from 'react';
import Divider from '../assets/Divider.svg';
import { Link } from "gatsby";

export default function NavBar() {
    // change nav logo to page title
    // const pageTitle = document.querySelector('nav .logo');
    const pathname = window.location.pathname.substring(1);


    return(
        <>
             <nav>
                <Link className="logo" to='/'>Huy Chau</Link>
                <h4 className="pageTitle">
                    <img src={Divider} alt="#"/>
                    {pathname}
                </h4>
                <input className="toggle" type="checkbox"></input>
                <div className="hamburger">
                    <div></div>
                </div>
                <ul className="menu" id="menu">
                    {/* <li className="menu__item" id="isHidden"><Link to={{pathname:"/"}}>Home</Link></li> */}
                    <li className="menu__item"><Link to='/gallery'>Gallery</Link></li>
                    <li className="menu__item"><Link to='/about'>About</Link></li>
                    <img className="slash" src={Divider} alt="#"/>
                </ul>
            </nav>
        </>
        
    )
}