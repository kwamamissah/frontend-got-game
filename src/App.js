import React, { Component } from 'react';

import GameContainer from './components/GameContainer.js'

import { Segment } from 'semantic-ui-react'

let image = `https://media.giphy.com/media/d97OPMEimWGBi/giphy.gif`

const mainBg = {
 background: `url(${image})`,
 backgroundRepeat: 'no-repeat',
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 height: '800px'
}

class App extends Component {

  render() {
    return (
      <Segment inverted style= { mainBg }>
        <GameContainer />
      </Segment>
    );
  }
}

export default App;
