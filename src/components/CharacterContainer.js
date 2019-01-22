import React, { Component } from 'react'

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
        {this.state.characters.map(character => <h4>{character.name}</h4>)}
      </div>
    )
  }
}
