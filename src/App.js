import React, { Component } from 'react';
import './styles/App.css';
import Routes from "./Routes";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    );
  }
};
