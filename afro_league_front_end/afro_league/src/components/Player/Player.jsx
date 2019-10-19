import React, { Component } from 'react';
import EditPlayer from './EditPlayer';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button, Row, Col, Container} from 'reactstrap';
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
            <div ClassName = "playerRosterff">
            <Container>
                <Card>
                <CardBody>
                    <CardImg top width = "100"  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1367&q=80" alt="Card image cap" />
                        <h1>{player.player}</h1>
                        <CardSubtitle>{player.team}'s {player.position}</CardSubtitle>
                        <p>{player.player} currently plays for {player.team} coached by {player.coach}</p>
                        <EditPlayer player={player}  updatePlayer ={this.updatePlayer}/>
                        <Button  outline color="danger" onClick={()=>{this.deletePlayer(player.id)}}>Delete Player</Button>
                    </CardBody>
                    </Card>
                    </Container>
                    </div>
</div>
        })
        return ( 
            <div>
                <h1>Afro League Player Roster</h1>
                <div className = "playerRoster">
                {player}
        </div>
        </div>)
    }
  }
  export default Player