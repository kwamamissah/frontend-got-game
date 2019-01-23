import React from 'react'

import { Button } from 'semantic-ui-react'

const GameOver = (props) => {

  return(
    <div>
      <div> Game Over </div>
      <Button onClick={() => props.restartGame()}> Restart Game </Button>
    </div>


  )
}

export default GameOver
