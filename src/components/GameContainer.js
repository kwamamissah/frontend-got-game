import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import CharacterContainer from './CharacterContainer.js'


export default class GameContainer extends Component {

  render() {
    return(
      <div>
        <CharacterContainer />
      </div>
    )
  }
}
