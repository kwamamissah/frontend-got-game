import React from 'react'

import { Button, Container, Header } from 'semantic-ui-react'


const GameOver = (props) => {

  return(
    <Container className='style' textAlign='center' style={{"margin-top": "80px"}}>
      <Header inverted size="huge"> Game Over </Header>
      <iframe title='GOT' width="560" height="315" src="https://www.youtube.com/embed/0MGnIUn30FU?&autoplay=1"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
      <br />
      <Header inverted size="huge"> Your Streak: {props.streak}</Header>
      <Button onClick={() => props.restartGame()}> Restart Game </Button>
    </Container>


  )
}

export default GameOver
