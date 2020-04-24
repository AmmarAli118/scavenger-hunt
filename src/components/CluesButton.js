import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'semantic-ui-react'

function MapButton() {
  return (
      <Button
        id="button2"
        as={Link}
        to="/clues"
      >Critical Clues</Button>
  )
}

export default MapButton