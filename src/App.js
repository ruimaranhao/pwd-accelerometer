import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Accelerometer from './react-accelerometer';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Accelerometer timeout={100} render={({ x, y, z, alpha, beta, gamma, html_processed }) => (
          <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
              transform: `rotate(${Math.round(alpha)}deg)`
            }}
          />
          <ul>
            <li>x: {x}</li>
            <li>y: {y}</li>
            <li>z: {z}</li>
            <li>rotation alpha: {alpha}</li>
            <li>rotation beta: {beta}</li>
            <li>rotation gamma: {gamma}</li>
          </ul>
          <p> BLA BLA: {html_processed}</p>
        </header>
        )}
        />
      </div>
    );
  }
}

