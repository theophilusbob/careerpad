import React, {Component} from 'react';
import './home.css';
import firebase from './firebase.js';
import downArrow from './assets/down_arrow.svg';
import rightArrow from './assets/right_arrow.svg' 


class Home extends Component {
    constructor(){
        super();   
        this.state = {
          img_src: "",
          title: "",
          description: "",
        };
      }

    componentDidMount() {
        const ref = firebase.database().ref("project");
        ref.on('value', (snapshot) => {
            var img_src = snapshot.child("img_src").val();
            var title = snapshot.child("title").val();
            var description = snapshot.child("description").val();

            this.setState({title});
            this.setState({img_src});
            this.setState({description});
          });
          
    }

    render() {
        return (
                <div>
                    <div className="full_container">
                    <div className="right_container">
                                <div className="posterImage">
                                    <img alt="Gambar Poster" src={this.state.img_src}/>
                                </div>
                                <a href="#careerpad_title">
                                <div className="register">
                                    <img alt="down" src={downArrow}/> 
                                </div>
                                </a>
                    </div>

                    <div className="main_container">
                        <div className="two_container">
                            <div className="whitespace"></div>
                            <div className="whitespace"></div>
                            <div className="contentItem"> 
                            <h1 id="careerpad_title"> {this.state.title} </h1>
                            </div>
                            <div className="contentItem"> 
                            </div>
                            
                            {/*<div className="contentItem">
                                <div className="smallContentItem">
                                    
                                    <div className="separator"></div>
                                    <h3>{this.state.time}</h3>
                                </div>
                                <div className="smallContentItem right">
                                    <div className="separator right"></div>
                                    <h3>{this.state.address}</h3>
                                </div>
                            </div>*/
                            }
                        </div>
                        <div className="two_container">
                        <div className="whitespace"></div>
                            <h1> Why? </h1>
                            <div className="thickSeparator"></div>
                            <div className="contentItem"> 
                                <p>{this.state.description}</p>
                                
                            </div>
                            <a target="_blank" rel="noopener noreferrer" href="https://careerpad.typeform.com/to/fQYz6l">
                                    <button>
                                        <span>Register Now</span>
                                        <img src={rightArrow} alt="Right Arrow"/>
                                    </button>
                                </a>
                        </div>
                    </div>
                    <div className="footer">
                        <span>CareerPad © 2018</span>
                        <span className="sosmed"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/careerpad.id/">Instagram</a></span>
                    </div>
                    </div>
                </div>
                
        );
    }
}

export default Home