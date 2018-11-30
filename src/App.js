import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Learn React Step by Step" />
      </div>
    );
  }
}

export default App;
