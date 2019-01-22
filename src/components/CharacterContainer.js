import React, { Component } from 'react'

import CharacterCard from './CharacterCard.js'

const API = `http://localhost:3000/characters`

export default class CharacterContainer extends Component {

    state = {
      characters: []
    }

    componentDidMount(){
      fetch(API)
      .then(resp => resp.json())
      .then(json => this.setState({ characters: json }))
    }

  render() {
    return(
      <div>
        {this.state.characters.map(character => <CharacterCard character={character} key={character.id}/>)}
      </div>
    )
  }
}
