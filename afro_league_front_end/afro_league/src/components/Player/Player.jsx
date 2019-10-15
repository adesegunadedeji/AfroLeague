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
        try{ 
        const player= await fetch('http://localhost:3001/leagues')
        const parsedResponse = await player.json();

        console.log(parsedResponse)	     
        this.setState({
           player: parsedResponse
        })
    }
    catch(err){
        console.log(err)
        }
    }

    updatePlayer = async(id,formData)=>{
        try{
            const updatePlayer = await fetch (`http://localhost:3001/leagues/${id}`,{
                method: "PUT",
                body:JSON.stringify(formData),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await updatePlayer.json();
            console.log(parsedResponse)
            if(parsedResponse){
                console.log("Update the Player", formData)
                this.setState({
                    player: this.state.player.map(player => player._id === id?
                        parsedResponse.league: player)
                })
            }
        }
        catch(err){
            console.log(err)
        }
    }

    deletePlayer = async(id) => {
        try{
            const deletePlayer = await fetch(`http://localhost:3001/leagues/${id}`,{
                method: "DELETE",
            });
            const parsedResponse = await deletePlayer.json();
            //Need to add If CHeck
            this.setState({
                player: this.state.player.filter(player=> player._id !==id)
            })
        }
        catch(err){
            console.log(err)
        }
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