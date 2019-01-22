import React from 'react'

import { Card, Button, Image, Icon } from 'semantic-ui-react'

const CharacterCard = (props) => {

  return(
    <Card>
      <Image src={props.character.image} />
      <Card.Content>
        <Card.Header>{props.character.name}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Alive
          </Button>
          <Button basic color='red'>
            Dead
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default CharacterCard
