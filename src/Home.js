import React, {Component} from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import firebase from './firebase.js'; 


class Home extends Component {
    constructor(){
        super();   
        this.state = {
          img_src: "",
          title: "myJudul",
          description: "Jagongan Media Rakyat (JMR) adalah gelaran dua tahunan yang diprakarsai oleh Combine Resource Institution sejak 2010. Jagongan Media Rakyat merupakan ruang pertemuan berbagai pihak untuk membahas isu­-isu sosial kemasyarakatan dengan informasi sebagai mediumnya.",
          date: "8-10 Maret 2018",
          venue: "Jogja National Museum (JNM)",
          time: "16:00 WIB",
          address: "Wirobrajan, Jogja 55253"
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
                <div className="main_container">
                        <div className="two_container">
                            <div className="logo">
                                <h2>CareerPad</h2>
                            </div>
                            <div className="contentItem"> 
                            <h1> {this.state.title} </h1>
                            </div>
                            <div className="thickSeparator"></div>
                            <div className="contentItem"> 
                                <p>{this.state.description}</p>

                            </div>
                            <div className="contentItem">
                                <div className="smallContentItem">
                                    <strong>{this.state.date}</strong>
                                    <div className="separator"></div>
                                    <strong>{this.state.time}</strong>
                                </div>
                                <div className="smallContentItem right">
                                    <strong>{this.state.venue}</strong>
                                    <div className="separator right"></div>
                                    <strong>{this.state.address}</strong>
                                </div>
                            </div>
                        </div>
                        <div className="two_container">
                            <div className="right_container">
                                <div className="posterImage">
                                    <img alt="Gambar Poster" src={this.state.img_src}/>
                                </div>
                                <div className="register">
                                    <span>You can register now for free!</span>
                                    <br></br>
                                    <Link to="/register">
                                        <button>I want to join the event</button>
                                    </Link>
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

export default Home;