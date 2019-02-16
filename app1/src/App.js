import React, { Component } from 'react';
import './App.css';
import Display from './display'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>My react Form!</h1>
        <Display name ="Paras" age = "20" month = "January" />
        <Display name ="Robin" age = "22" month = "September" />
      </div>
    );
  }
}

export default App;
