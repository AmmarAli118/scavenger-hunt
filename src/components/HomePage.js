import React from 'react'
import {Grid} from 'semantic-ui-react'
import ButtonSet from './ButtonSet'

function HomePage() {
  return (
    <div id="home-page">
      <Grid centered columns={2}>
        <Grid.Column>
          <div className="reg-container">
          <div style={{fontSize: "30px", marginBottom: "10px"}}> !Ramadaan Mubarak! <br/><br/> Welcome to the hunt</div><br/><br/>
            
          <div style={{fontSize: "20px", marginBottom: "10px"}}>Objective:</div>
            Complete the hidden task. 
            <br/>
            <br/>
            <div style={{fontSize: "20px", marginBottom: "10px"}}>How to win:</div>
            - To decode the hidden task, you must identify the 5 critical clues.<br/>
            - To identify the critical clues, you must solve 5 puzzles.<br/>
            - To solve the 5 puzzles, you must find them on the map.<br/>
            - To find them on the map, you must complete the 5 coordinates.<br/>
            - To complete the coordintes, you must solve the 5 riddles below.<br/>
            <br/>
            
            Below are links to two pages you'll find helpful:
            <div style={{height: "15px"}}></div>
              <ButtonSet/>
            <div style={{height: "25px"}}></div>
            
            <div style={{fontSize: "20px", marginBottom: "10px"}}>How do we use the map?</div>
            In order to find these five puzzles, you'll have to "visit" five places on the map.  
            For example, if you were told to visit <span className="red-underline">F15</span> and saw a crab on the map, 
            you would navigate to <span className="red-underline">/crab</span> in the URL above replacing '/home'. 
            (You'll know if you've gone to the right address.)<br/><br/>

            <div style={{fontSize: "20px", marginBottom: "10px"}}>And one last thing!</div>
            As the final part of the hunt, Ammar will give you one final critical clue that will (hopefully) help you figure out how these five clues fit together; thus decoding the hidden task. <br/><br/>
            {/* the final destination is '/toilet' I can come up with a punzzle for this that can maybe do something with cards? */}

            <div style={{fontSize: "20px", marginBottom: "10px"}}>How do we start?</div>
            {/* 9-8-11-8-12 */}
            You'll start by figuring out the answers to the questions below!  Answering each question will give you a letter.
              At the start of the hunt, Ammar will reveal five numbers that you can pair with these letters (in order) 
              to give you <span className="red-underline">five sets of coordinates</span>

            <br/><br/><br/>
            <div style={{fontSize: "20px", marginBottom: "10px"}}>Questions:</div>
            <div style={{textAlign: "left"}}>
            1. Where was Prophet Muhammad (PBUH) born?<br/>
            <br/>T. Riyadh
            <br/>D. Mecca
            <br/>N. Jerusalem
            <br/>Z. Medina
            {/* /whitehouse D9 */}
            <br/><br/>
            2. How many months are in the lunar calendar? <br/>
            <br/>A. 10
            <br/>B. 11
            <br/>J. 12
            <br/>D. 13
            <br/>C. 14
            {/* /cheese J8 */}
            <br/><br/>
            3. Which sport is strangely associated with Christmas in Venezuela?
            <br/>D. Skating
            <br/>E. Football
            <br/>B. Soccer
            <br/>F. Archery
            {/* /scuba D11 */}
            <br/><br/>
            Which two countries share the longest (or largest) international border?
            <br/>A. Chile and Brazil 
            <br/>M. China and Russia
            <br/>S. USA and Mexico
            <br/>U. Canada and USA
            {/* /book U8 */}
            <br/><br/>
            5. How many board games does Ammar Bhai have?<br/>
            <br/>O. 14
            <br/>R. 24 
            <br/>X. 21
            <br/>Z. 19
            {/* /astronaut R12 */}
            <br/><br/>
            </div>
            <div style={{fontSize: "30px", marginBottom: "20px"}}>Good luck!</div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default HomePage