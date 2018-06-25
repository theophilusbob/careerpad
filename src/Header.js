import React from 'react'
import ResponsiveMenu from 'react-responsive-navbar';
import './home.css';

const Header = () => (
    <div className="header">
        <div className="two_container">
            <div className="logo">CareerPad</div>
                <div className="logo_lite">
                    <h1>C</h1>
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
                    largeMenuClassName="large-menu-classname"
                    smallMenuClassName="small-menu-classname"
                    menu={
                        <ul className="menu">
                            <li>Vision</li>
                            <li>Our Process</li>
                            <li>Founder</li>
                            <li>About</li>
                        </ul>
                    }
            />
        </div>         
    </div>
)

export default Header