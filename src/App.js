import './App.css';
import React, { Component } from 'react';
import Navbar from './pages/navbar';
import MainNews  from './pages/mainNews';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainNews/>
      </div>
    );
  }
}
