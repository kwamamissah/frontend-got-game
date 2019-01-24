import React from 'react'

import { Button, Container } from 'semantic-ui-react'


const StartGame = (props) => {

  return(
    <Container className='style' textAlign='center' style={{"margin-top": "40px"}}>
      <div> GOTgame </div>
      <Button onClick={() => props.startGame()}>Start Game</Button>
    </Container>
  )


}

export default StartGame
