import React from 'react'

import { Button, Container, Segment } from 'semantic-ui-react'

let image = `http://www.gstatic.com/tv/thumb/tvbanners/14160794/p14160794_b_v8_aa.jpg`
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

const StartGame = (props) => {

  return(
    <Segment style={ mainBg }>
      <Container className='style' textAlign='center' style={ margin }>
        <a href="https://fontmeme.com/game-of-thrones-font/">
        <img src="https://fontmeme.com/permalink/190125/655754f96ee88df12f250d250f2bf5b5.png"
          alt="game-of-thrones-font" border="0" /></a>
        <br />
        <Button onClick={() => props.startGame()}>Start Game</Button>
      </Container>
  </Segment>
  )


}

export default StartGame
