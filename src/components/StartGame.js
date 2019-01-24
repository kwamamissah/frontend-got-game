import React from 'react'

import { Button, Container, Header } from 'semantic-ui-react'


const StartGame = (props) => {

  return(
    <Container className='style' textAlign='center' style={{"margin-top": "150px"}}>
      <Header inverted size="huge"> GOTgame </Header>
      <Button onClick={() => props.startGame()}>Start Game</Button>
    </Container>
  )


}

export default StartGame
