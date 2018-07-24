import React from 'react'
import { Link } from 'react-router-dom'
import rightArrow from './assets/right_arrow.svg'

const About = () => (
    <div className="full_container">
        <div className="main_container">
                <div className="two_container">
                    <div className="contentItem">
                        <h1>About</h1>
                    </div>
                    <div className="thickSeparator"/>
                    <div className="contentItem">
                        <h2>
                        The premier collaboration platform that connect all the stakeholders of Indonesian digital industry to develop and nurture digital talents in order to overcome the talent shortage. 
                        </h2>
                    </div>
                    <div className="contentItem">
                        <p>
                        Careerpad is created by the industry players, for the advancement of digital ecosystem in the country. 
                        </p>
                    </div>

                    <div className="smallContentItem">
                        <a target="_blank" rel="noopener noreferrer" href="https://careerpad.typeform.com/to/fQYz6l">
                            <button>
                            <span>Register Now</span>
                                <img src={rightArrow} alt="Right Arrow"/>
                            </button>
                        </a>
                    </div>
                </div>
            <div className="two_container">
            </div> 
        </div>
        <div className="footer">
                        <span>CareerPad © 2018</span>
                        <span className="sosmed"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/careerpad.id/">Instagram</a></span>
                    </div>
    </div>
    
);
            
export default About