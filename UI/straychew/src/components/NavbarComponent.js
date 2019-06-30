import React, {Component} from 'react';
import "../style/NavbarComponent.css"
import {Link} from "react-router-dom"


class NavbarComponent extends Component{
    render(){
        return(
            <div className="NavbarUDC">
            <nav className="no-shadows">
                <div className="nav-wrapper pink darken-1 ">
                    <a href="sass.html" className="brand-logo" id="Title">StrayChew</a>
                    <a href="sass.html" className="sidenav-trigger" data-target="mobile-nav">
                        <i className="material-icons">view_week</i>
                    </a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down landscape">
                        <li><Link to="/ChewNow">Chew Now</Link></li>
                        <li><Link to="/Engineering">Engineering</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>

                </div>
            </nav>

            <ul id="mobile-nav" className="sidenav">
                        <li><a href="sass.html">Chew Now</a></li>
                        <li><a href="badges.html">Engineering</a></li>
                        <li><a href="collapsible.html">About</a></li>
            </ul>
            </div>
        )
    }
}
 

export default NavbarComponent;
