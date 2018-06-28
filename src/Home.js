import React, {Component} from 'react';
import './home.css';
import firebase from './firebase.js'; 


class Home extends Component {
    constructor(){
        super();   
        this.state = {
          img_src: "",
          title: "",
          description: "",
          date: "",
          venue: "",
          time: "",
          address: ""
        };
      }


    componentDidMount() {
        const ref = firebase.database().ref("project");
        ref.on('value', (snapshot) => {
            var img_src = snapshot.child("img_src").val();
            var title = snapshot.child("title").val();
            var description = snapshot.child("description").val();
            var date = snapshot.child("date").val();
            var venue = snapshot.child("venue").val();
            var time = snapshot.child("time").val();
            var address = snapshot.child("address").val();

            this.setState({title});
            this.setState({img_src});
            this.setState({description});
            this.setState({date});
            this.setState({venue});
            this.setState({time});
            this.setState({address});
          });
          
    }

    render() {
        return (
                <div>
                    <div className="main_container">
                        <div className="two_container">
                            <div className="whitespace"></div>
                            <div className="contentItem"> 
                            <h1> {this.state.title} </h1>
                            </div>
                            <div className="thickSeparator"></div>
                            <div className="contentItem"> 
                                <p>{this.state.description}</p>

                            </div>
                            <div className="contentItem">
                                <div className="smallContentItem">
                                    
                                    <div className="separator"></div>
                                    <h3>{this.state.time}</h3>
                                </div>
                                <div className="smallContentItem right">
                                    <div className="separator right"></div>
                                    <h3>{this.state.address}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="two_container right">
                            <div className="right_container">
                                <div className="posterImage">
                                    <img alt="Gambar Poster" src={this.state.img_src}/>
                                </div>
                                <div className="register">
                                    <span>You can register now for free!</span>
                                    <br></br>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/intl/id_id/forms/about/">
                                        <button>I want to join the program</button>
                                    </a>
                                </div>
                            </div>
                            <div className="footer">
                            CareerPad©2018
                        </div>
                        </div>
                    </div>
                </div>
                
        );
    }
}

export default Home