import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Form from './Form';
import {Route} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (

      /*<Home 
          title={this.state.title}
          description={this.state.description}
          img_src={this.state.img_src}
          date={this.state.date}
          venue={this.state.venue}
          time={this.state.time}
          address={this.state.address} 
        /> */
      <div>
        <Route path="theophilusbob.github.io/careerpad" exact={true} component={Home}/>
        <Route path="theophilusbob.github.io/careerpad/register" component={Form}/>
      </div>
    );
  }
}

export default App;
