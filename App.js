import React, { Component } from 'react';
import './App.css';
import Display from './display'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>My react Form!</h1>
        <Display name ="Nomita" age = "21" month = "August" />
        <Display name ="Harika" age = "21" month = "January" />
      </div>
    );
  }
}

export default App;
