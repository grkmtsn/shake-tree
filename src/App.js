import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Game } from './containers';

import * as Context from './context';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Context.Game.Provider>
        <div className="wrapper">
          <div className="viewport">
            <Game />
          </div>
        </div>
      </Context.Game.Provider>
    );
  }
}

export default hot(App);
