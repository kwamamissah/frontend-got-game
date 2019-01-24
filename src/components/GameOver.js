import React from 'react'

import { Button, Container } from 'semantic-ui-react'

const GameOver = (props) => {

  return(
    <Container textAlign='center' style={{"margin-top": "40px"}}>
      <div> Game Over </div>
      <iframe title='GOT' width="560" height="315" src="https://www.youtube.com/embed/0MGnIUn30FU?&autoplay=1"
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
      <br />
      <Button onClick={() => props.restartGame()}> Restart Game </Button>
    </Container>


  )
}

export default GameOver
