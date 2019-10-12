import React , {Component} from 'react';
import './App.css';
import Player from './components/Player/Player';
import Register from './components/Register/Register'

class App extends Component {

  constructor(){
    super();
    this.state={
        loggedIn: false,
        username:null,
        email: null
    }
} 

  componentDidMount(){
    console.log("Component did Mount");
    this.getUser();
}

    getUser = async()=>{
      try{ 
      const player  = await fetch("http://localhost:3001/users");
      const parsedResponse = await player.json();
      console.log(parsedResponse)
    }
    catch(err){
      console.log(err)
    } 
  }
  handleRegister = async(formData)=>{
    try{

  
    console.log(formData)
    const registerResponse = await fetch(`http://localhost:3001/users`,{
        method: "POST",
        body: JSON.stringify(formData),
        headers:{
            "Content-Type": "application/json",
            "acccept": "application/json",
        }
    })
    const parsedResponse = await registerResponse.json();
    console.log("ParsedResponse from Registration",parsedResponse)
    if(parsedResponse.username !== null){
        console.log("Succesfull Registration")
        this.setState({
            loggedIn: true,
            username:parsedResponse.username,
            email: parsedResponse.email
        })
    }
  }
  catch(err){
    console.log(err)
  }
}

  render(){
  return (
    <div className="App">
       {
          this.state.loggedIn ?
        <Player/>:
        <Register handleRegister={this.handleRegister}/>
       }
    </div>
  );
  }
}

export default App;
