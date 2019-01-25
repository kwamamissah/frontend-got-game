import React from 'react'

import { Button, Container, Segment, Header } from 'semantic-ui-react'

let image = `https://media.giphy.com/media/d97OPMEimWGBi/giphy.gif`
const mainBg = {
  background: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '800px'
}

const margin = {
  marginTop: '40px'
}

const GameOver = (props) => {

  return(
    <Segment style={ mainBg }>
      <Container className='style' textAlign='center' style={ margin } >
        <a href="https://fontmeme.com/game-of-thrones-font/">
        <img src="https://fontmeme.com/permalink/190124/a5cecfa2d866f447e84b2b9dc76849a7.png"
        alt="game-of-thrones-font" border="0" /></a>
        <br />
        <br />
        <iframe title='GOT' width="560" height="315" src="https://www.youtube.com/embed/0MGnIUn30FU?&autoplay=1"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <br />
        <br />
        <Header inverted size="huge"> Final Score: {props.streak} </Header>
        <Button onClick={() => props.restartGame()}> Restart Game </Button>
      </Container>
    </Segment>

  )
}

export default GameOver
