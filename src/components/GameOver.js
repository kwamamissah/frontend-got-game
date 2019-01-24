import React from 'react'

import { Button, Container, Segment, Header } from 'semantic-ui-react'

let image = `https://media.giphy.com/media/d97OPMEimWGBi/giphy.gif`
const mainBg = {
  // marginTop: '40px',
  background: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '800px'
}

const GameOver = (props) => {

  return(
    <Segment style={ mainBg }>
      <Container className='style' textAlign='center' style={{'margin-top': '40px'}}>
        <Header inverted> Game Over </Header>
        <iframe title='GOT' width="560" height="315" src="https://www.youtube.com/embed/0MGnIUn30FU?&autoplay=1"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <br />
        <Button onClick={() => props.restartGame()}> Restart Game </Button>
      </Container>
    </Segment>


  )
}

export default GameOver
