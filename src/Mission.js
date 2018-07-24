import React from 'react'
import rightArrow from './assets/right_arrow.svg'

const Mission = () => (
    <div className="full_container">
        <div className="main_container">
                <div className="two_container">
                    <div className="contentItem">
                        <h1>Mission</h1>
                    </div>
                    <div className="thickSeparator"/>
                    <div className="contentItem">
                        <p>
                        Facilitate University Students to have a real work experience by  solving real project and business case.
                        </p>
                    </div>
                    <div className="separator"></div>
                    <div className="contentItem">
                        <p>
                        Enable brands and agencies to find the best talents through accountable programs and supervised by the best mentors in the industry.
                        </p>
                    </div>
                    <div className="separator"></div>
                    <div className="contentItem">
                        <p>
                        Answer the talent shortage that plague the industry and hinder the digital transformation in Indonesia
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
            
export default Mission