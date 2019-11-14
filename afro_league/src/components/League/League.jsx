import React, { Component } from 'react';

class League extends Component {

    constructor(){
        super()
        this.state = {
            League: []
        }
    }
    
    render () {
        return ( 
            <div className = "playerRoster">
                <h1>Afro League Player Roster</h1>
            </div>
        )
    }
  }
  export default Player