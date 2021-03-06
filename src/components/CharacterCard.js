import React from 'react'

import { Card, Button, Image } from 'semantic-ui-react'

const margin = {
  marginTop: '80px'
}

const CharacterCard = (props) => {

  return(
    <Card centered style={ margin }>
      <Image src={props.character.image} />
      <Card.Content>
        <Card.Header>{props.character.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button onClick={(e) => props.handleClick(e, props.character)} name="alive" basic color='green'>
            Alive
          </Button>
          <Button onClick={(e) => props.handleClick(e, props.character)} name="dead" basic color='red'>
            Dead
          </Button>
        </div>
      </Card.Content>
      <Card.Content>
        <Card.Header>Streak: {props.streak}</Card.Header>
      </Card.Content>
    </Card>
  )
}

export default CharacterCard
