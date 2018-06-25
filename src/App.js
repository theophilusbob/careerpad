import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  
  render() {
    return (
      /*<div>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/register" component={Form}/>
      </div>*/

      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
