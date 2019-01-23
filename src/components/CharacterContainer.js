import React, { Component } from 'react'

import CharacterCard from './CharacterCard.js'
import GameOver from './GameOver.js'

const API = `http://localhost:3000/characters`

export default class CharacterContainer extends Component {

  state = {
    characters: [null],
    viewed: [],
    character: null,
    gameOver: false
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


  handleClick = (e, c) => {
    if ((e.target.name === "alive") && (c.alive))  {
      this.setState({ viewed: this.state.viewed.concat(c)})
    } else if (!(e.target.name === "alive") && !(c.alive)) {
      this.setState({ viewed: this.state.viewed.concat(c)})
    } else {
      this.setState({ gameOver: true })
    }
  }


  selectCharacter = () => {
    if (this.state.characters[0] === null) {
      return <div>loading...</div>
    } else if (this.state.gameOver) {
        return <GameOver restartGame={this.restartGame} />
    } else if (this.state.viewed.length === 0) {
      return <CharacterCard handleClick={this.handleClick} character={this.renderFirstCharacter()} streak={this.state.viewed.length} />
    } else {
      return <CharacterCard handleClick={this.handleClick} character={this.renderNextCharacter()} streak={this.state.viewed.length} />
    }
  }

  restartGame = () => {
    this.setState({ viewed: [], gameOver: false })
  }

  render() {
    return(
      <div>
        {this.selectCharacter()}
      </div>
    )
  }
}
