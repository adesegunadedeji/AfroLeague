import React, {Component} from 'react'
import Register from '../Authentication/Register'
import { Jumbotron, NavLink, Container, Button} from 'reactstrap';
import NewPlayer from '../Player/NewPlayer'
class Home extends Component{
    constructor(){
        super();
        this.state ={
            time: [],
            news:[
            ]
        }
    }
    
    componentDidMount(){
        console.log("Component did Mount");
        this.getUser();
        this.getConference();
        this.getNews();
    }
    
    getUser = async()=>{
        try{
            const player  = await fetch("http://localhost:3001/users",{
                method: "GET",
                credentials: "include",
            });
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
                credentials: "include",
                body: JSON.stringify(formData),
                headers:{
                "Content-Type": "application/json",
                "acccept": "application/json",
            }
        })
            const parsedResponse = await registerResponse.json();
            console.log("ParsedResponse from Registration",parsedResponse)
            if(parsedResponse){
            // this.setState({
            //     username:parsedResponse.username,
            //     email: parsedResponse.email,
            //     password: parsedResponse.password
            // })
            this.props.handleSuccessfulAuth(parsedResponse);
            console.log("Successful Registration")
        }
      }
      catch(err){
          console.log("Register Error", err)
      }
    }
    // handleLogoutClick = async()=>{
    //     try {
    //         await fetch(`http://localhost:3001/logout`,{
    //         method: "DELETE",
    //     })
    //         this.props.handleLogout();
    //     }
    //     catch(err){
    //         console.log("LOGOUT ERROR",err)
    //     }
    // }

    getConference = async()=>{
        try{
        const conference =  await fetch(` http://worldtimeapi.org/api/timezone/America/New_york`, {
            "method": "GET"
         })
         const parsedResponse = await conference.json();
         console.log(parsedResponse)
         this.setState({
             time: parsedResponse.datetime
         })
        }
        catch(err){
            console.log(err);
        } 
};
getNews= async()=>{
    try{
    const basketballNews =  await fetch(`http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news`, {
        "method": "GET"
     })
     const parsedResponse = await basketballNews.json();
     console.log(parsedResponse)
     this.setState({
         news: parsedResponse
     })
    }
    catch(err){
        console.log(err);
    } 
};

    render(){
        return(
            <div>
                   {/* <h3>Status: {this.props.logged_in}</h3>  */}
                {/* <button onClick={()=> this.handleLogoutClick()}>Logout</button> */}
                <Register  handleRegister={this.handleRegister} handleSuccessfulAuth={this.props.handleSuccessfulAuth}/>
                <div>
      <Jumbotron>
          <Container>
        <h1 className="display-3">Afro League</h1>
        <hr className="my-2" />
        <p className="lead">
        </p>
        <NavLink href="/about" className = "jumbotronLink">Learn More</NavLink>
        </Container>
      </Jumbotron>
    </div>
            <h1>Interested in joining us?</h1>
            <hr className="my-2" />
            <NavLink href="/NewPlayer" className = "jumbotronLink">New Player</NavLink>
          <div>
</div>
<h1>Local Time:{this.state.time}</h1>
    </div> 

   
        )
    }
}
export default Home