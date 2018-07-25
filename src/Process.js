import React from 'react'
import arrow from './assets/arrow.svg'
import rightArrow from './assets/right_arrow.svg' 

const Process = () => (
    <div className="full_container">
        <div className="whitespace"></div>
            <div className="main_container">
                    <div className="two_container">
                        <div className="contentItem">
                            <h1>How It Works</h1>
                        </div>
                        <div className="thickSeparator"/>
                        <div className="contentItem process">
                            <p>
                            Portfolio Submission 
                            </p>
                        </div>
                        <div className="contentItem arrow">
                            <img src={arrow} alt="Arrow"/>
                        </div>
                        <div className="contentItem process">
                            <p>
                            Team Verification 
                            </p>
                        </div>
                        <div className="contentItem arrow">
                            <img src={arrow} alt="Arrow"/>
                        </div>
                        <div className="contentItem process">
                            <p>
                            Winning Team Announcement 
                            </p>
                        </div>
                    </div>
                    <div className="two_container">
                    <div className="contentItem">
                            <h1>CareerPad Team</h1>
                        </div>
                        <div className="thickSeparator"/>
                        <div className="contentItem process">
                            <p>
                            Receive Brief 
                            </p>
                        </div>
                        <div className="contentItem arrow">
                            <img src={arrow} alt="Arrow"/>
                        </div>
                        <div className="contentItem process">
                            <p>
                            Mentorship 
                            </p>
                        </div>
                        <div className="contentItem arrow">
                            <img src={arrow} alt="Arrow"/>
                        </div>
                        <div className="contentItem process">
                            <p>
                            Project Delivery 
                            </p>
                        </div>
                    </div> 
            </div>
            <div className="main_container">
                <div className="two_container">
                    <h1>Want to work on exciting projects?</h1>
                    <a target="_blank" rel="noopener noreferrer" href="https://careerpad.typeform.com/to/fQYz6l">
                        <button>
                            <span>Apply Now</span>
                            <img src={rightArrow} alt="Right Arrow"/>
                        </button>
                    </a>
                </div>
                <div className="two_container"></div>
            </div>
            
            <div className="footer">
                        <span>CareerPad © 2018</span>
                        <span className="sosmed"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/careerpad.id/">Instagram</a></span>
                    </div>
        </div>
);
            
export default Process