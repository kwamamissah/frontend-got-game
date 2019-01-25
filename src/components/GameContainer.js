import React, { Component } from 'react'

import CharacterContainer from './CharacterContainer.js'
import { Segment } from 'semantic-ui-react'


let image = `https://media.giphy.com/media/d97OPMEimWGBi/giphy.gif`
const mainBg = {
  background: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '900px'
}



export default class GameContainer extends Component {

  render() {
    return(
      <Segment style= { mainBg }>
        <CharacterContainer />
      </Segment>
    )
  }
}
