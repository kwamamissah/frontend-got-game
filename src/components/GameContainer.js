import React, { Component } from 'react'

import CharacterContainer from './CharacterContainer.js'
import Streak from './Streak.js'

export default class GameContainer extends Component {

  render() {
    return(
      <div>
        <CharacterContainer />
        <Streak />
      </div>
    )
  }
}
