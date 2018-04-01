import React, { Component } from 'react';
import poster from './assets/Poster.png'
import './App.css';
import Home from './Home';

class App extends Component {
  constructor(){
    super();
    this.state = {
      img_src: poster,
      title: "Jagongan Media Rakyat 2018",
      description: "Jagongan Media Rakyat (JMR) adalah gelaran dua tahunan yang diprakarsai oleh Combine Resource Institution sejak 2010. Jagongan Media Rakyat merupakan ruang pertemuan berbagai pihak untuk membahas isu­-isu sosial kemasyarakatan dengan informasi sebagai mediumnya.",
      date: "8-10 Maret 2018",
      venue: "Jogja National Museum (JNM)",
      time: "16:00 WIB",
      address: "Wirobrajan, Jogja 55253"
    };
  }
  render() {
    return (
      <Home 
        title={this.state.title}
        description={this.state.description}
        img_src={this.state.img_src}
        date={this.state.date}
        venue={this.state.venue}
        time={this.state.time}
        address={this.state.address} 
      />
    );
  }
}

export default App;
