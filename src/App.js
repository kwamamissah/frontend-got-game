import React, { Component } from 'react';

import GameContainer from './components/GameContainer.js'

import { Segment } from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <Segment inverted style= {{ 'height': "800px"}}>
        <GameContainer />
      </Segment>
    );
  }
}

export default App;
