import React, {Component} from 'react'
import Register from '../Register/Register'
class Home extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("Component did Mount");
        this.getUser();
    }
    
        getUser = async()=>{
          try{ 
          const player  = await fetch("http://localhost:3001/users",{
              method: "GET"
          });
          const parsedResponse = await player.json();
          console.log(parsedResponse)
        }
        catch(err){
          console.log(err)
        } 
      }
      handleSuccessfulAuth(data) {
        //TODO Update Parent Component
        //Redirect the User
        this.props.handleLogin(data);
        this.props.history.push("/dashboard")
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
        if(parsedResponse){
            this.setState({
                username:parsedResponse.username,
                email: parsedResponse.email,
                password: parsedResponse.password
            })
            this.handleSuccessfulAuth(parsedResponse);
            console.log("Successful Registration")
        }
      }
      catch(err){
        console.log(err)
      }
    }

    render(){
        return(
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.logged_in}</h1>
                <Register  handleRegister={this.handleRegister} handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        )
    }
}
export default Home