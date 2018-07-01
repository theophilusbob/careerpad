import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ResponsiveMenu from 'react-responsive-navbar';
import './home.css';

const Header = () => (
    <div className="header">
        <div className="two_container">
            <div className="logo"><Link className="link" to="/">CareerPad</Link></div>
                <div className="logo_lite">
                    <h1><Link className="link" to="/">C</Link></h1>
                    <div className="logo_underline"></div>
                </div>    
            </div>

        <div className="two_container">
            <ResponsiveMenu
                menuOpenButton={ 
                    <div className="hamburger">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                }
                menuCloseButton={
                    <div className="hamburger">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                }
                changeMenuOn="768px"
                    largeMenuClassName=""
                    smallMenuClassName=""
                    menu={
                        <ul className="menu">
                            <li><NavLink className="link" activeClassName="active" to="/about">About</NavLink></li>                          
                            <li><NavLink className="link" activeClassName="active" to="/mission">Mission</NavLink></li>
                            <li><NavLink className="link" activeClassName="active" to="/founder">Founder</NavLink></li>
                            <li><NavLink className="link" activeClassName="active" to="/how-it-works">How It Works</NavLink></li>
                        </ul>
                }
            />
        </div>         
    </div>
)

export default Header