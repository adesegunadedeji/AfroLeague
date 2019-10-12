import React, { Component } from 'react';

class Player extends Component {

    constructor(){
        super()
        this.state = {
            player: []
        }
    }

    componentDidMount(){
        console.log("Component did Mount");
        this.getPlayer();
    }

    getPlayer = async() =>{
        const player= await fetch('http://localhost:3001/leagues')
        const parsedResponse = await player.json();
        console.log(parsedResponse)	     
        this.setState({
           player: parsedResponse
        })
    }




    render () {
        const player = this.state.player.map((playerProfile)=>{
        return <div key = {playerProfile.id}>
                    <p>{playerProfile.player}</p>   
            </div>
        })
        return ( 
            <div className = "playerRoster">
                <h1>Afro League Player Roster</h1>
                {player}
            </div>
        )
    }
  }
  export default Player