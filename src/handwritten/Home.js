import React, {Component} from 'react';
import './home.css'

class Home extends Component {

    render() {
        return (
            <div className="main_container">
                    <div className="two_container">
                        <div className="logo">
                            <h2>CareerPad</h2>
                        </div>
                        <div className="contentItem"> 
                        <h1> {this.props.title} </h1>
                        </div>
                        <div className="thickSeparator"></div>
                        <div className="contentItem"> 
                            <p>{this.props.description}</p>

                        </div>
                        <div className="contentItem">
                            <div className="smallContentItem">
                                <strong>{this.props.date}</strong>
                                <div className="separator"></div>
                                <strong>{this.props.time}</strong>
                            </div>
                            <div className="smallContentItem right">
                                <strong>{this.props.venue}</strong>
                                <div className="separator right"></div>
                                <strong>{this.props.address}</strong>
                            </div>
                        </div>
                    </div>
                    <div className="two_container">
                        <div className="right_container">
                            <div className="posterImage">
                                <img alt="Gambar Poster" src={this.props.img_src}/>
                            </div>
                            <div className="register">
                                <span>You can register now for free!</span>
                                <br></br>
                                <button>I want to join the event</button>
                            </div>
                        </div>
                        <div className="footer">
                        CareerPad©2018
                    </div>
                    </div>
                </div>
        );
    }
}

export default Home