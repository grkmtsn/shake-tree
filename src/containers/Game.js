import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tree, Button } from '../components';

class Game extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <React.Fragment>
        <Button />
        <Tree />
      </React.Fragment>
    );
  }
}

export default Game;
