import React from 'react'
import {Grid} from 'semantic-ui-react'
import HomeButton from './HomeButton'

function HomePage() {
  return (
    <div id="map-page">
      <Grid centered columns={2}>
        <Grid.Column>
          <div className="reg-container">
            Uh-oh, looks like you went to a route that doesn't exist! <br/><br/> 
            Try re-wording your destination, or ask Ammar Bhai if you need some clarification.<br/><br/>
            Don't forget you can 'Ask for Help' in the bottom right hand of the zoom call <br/><br/>
            You only have 3 hints so use them wisely!<br/><br/>
            <HomeButton/>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default HomePage