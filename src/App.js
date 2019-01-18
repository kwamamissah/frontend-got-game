import React, { Component } from 'react';

const API = `http://localhost:3000/characters`
class App extends Component {

  state = {
    characters: []
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(json => this.setState({ characters: json }))
  }


  render() {
    return (
      <div className="App">
        {this.state.characters.map(character => <h4>{character.name}</h4>)}
      </div>
    );
  }
}

export default App;
