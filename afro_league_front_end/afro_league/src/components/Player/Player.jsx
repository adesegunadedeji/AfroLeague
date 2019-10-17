import React, { Component } from 'react';
import EditPlayer from './EditPlayer';
import {Button} from 'reactstrap';
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
            console.log("PARSED RESPONSE!!!!!!!!!", parsedResponse)
                this.setState({
                    player: this.state.player.map(player => player.id === id?
                    parsedResponse: player)
                })
            console.log("player", this.state.player)
        }
        catch(err){
            console.log(err)
        }
    }

    deletePlayer = async(id) => {
        try{
            await fetch(`http://localhost:3001/leagues/${id}`,{
                method: "DELETE",
            });
            this.setState({
                player: this.state.player.filter(player=> player.id !==id)
            })
        }
        catch(err){
            console.log(err)
        }
    }
    
    render () {
       let player = this.state.player.map(player =>{
        console.log("This is player ID",player)
        return <div key = {player.id}>
                    <h4>{player.player}</h4>
                    <EditPlayer player={player}  updatePlayer ={this.updatePlayer}/>
                    <Button  outline color="danger" onClick={()=>{this.deletePlayer(player.id)
    }}>Delete Player</Button>
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