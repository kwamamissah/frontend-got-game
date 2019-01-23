import React, { Component } from 'react'

import CharacterCard from './CharacterCard.js'

const API = `http://localhost:3000/characters`

export default class CharacterContainer extends Component {

  state = {
    characters: [null],
    viewed: [],
    character: null
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(json => this.setState({ characters: json }))
  }

  getUnviewed = () => {
    return this.state.characters.filter(character => {
      return !this.state.viewed.includes(character)
    });
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  renderFirstCharacter = () => {
    let characters = this.state.characters
    let num = this.getRandomInt(characters.length)
    let c = characters[num]
    return c
  }

  renderNextCharacter = () => {
    let unviewed = this.getUnviewed()
    let num = this.getRandomInt(unviewed.length)
    let c = unviewed[num]
    return c
  }

  // based on which button is clicked
  // check with button is clicked
  // compare with Character "alive" status

  // got error, viewed array is empty so we got undefined

  // somewhere, concat c into the viewed array

  handleClick = (e, c) => {
    if ((e.target.name === "alive") && (c.alive) || !(e.target.name === "alive") && !(c.alive)) {
      this.setState({ viewed: this.state.viewed.concat(c)})
      console.log(this.state.viewed)
    } else {
      console.log('game over', e.target.name, c.alive)
    }
  }


  selectCharacter = () => {
    if (this.state.characters[0] === null) {
      return <div>loading...</div>
    } else if (this.state.viewed.length === 0) {
      return <CharacterCard handleClick={this.handleClick} character={this.renderFirstCharacter()} />
    } else {
      return <CharacterCard handleClick={this.handleClick} character={this.renderNextCharacter()} />
    }
  }

  render() {
    return(
      <div>
        {this.selectCharacter()}
      </div>
    )
  }
}
