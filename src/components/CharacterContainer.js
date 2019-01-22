import React, { Component } from 'react'

import CharacterCard from './CharacterCard.js'

const API = `http://localhost:3000/characters`

export default class CharacterContainer extends Component {

  state = {
    characters: [2],
    viewed: []
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(json => this.setState({ characters: json }))
  }

  getUnviewed = () => {
    this.state.characters.filter(character => {
      return !this.state.viewed.includes(character)
    });
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  renderFirstCharacter = () => {
    let characters = this.state.characters
    let num = this.getRandomInt(characters.length)
    console.log(num, characters, characters[num])
    return characters[num]
  }

  renderNextCharacter = () => {
    let unviewed = this.getUnviewed()
    let number = this.getRandomInt(unviewed.length)
    console.log(number, 'hi from unviewed')
    return unviewed[number]
  }


  render() {
    return(
      <div>
      {(this.state.viewed.length === 0) ? <CharacterCard character={this.renderFirstCharacter()} /> : <CharacterCard character={this.renderNextCharacter()} />}
      </div>
    )
  }
}
