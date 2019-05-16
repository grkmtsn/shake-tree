import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Game } from './containers';

import Background from './images/bg.png';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="viewport">
          <Game />
        </div>
      </div>
    );
  }
}

export default hot(App);
