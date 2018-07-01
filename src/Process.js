import React from 'react'
import arrow from './assets/arrow.svg'

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
        </div>
);
            
export default Process