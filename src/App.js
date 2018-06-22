import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Form from './Form';
import {Route} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div>
        
        <Route path="/" exact={true} component={Home}/>
        <Route path="/register" component={Form}/>
      </div>
    );
  }
}

export default App;
