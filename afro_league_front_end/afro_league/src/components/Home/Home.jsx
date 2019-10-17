import React, {Component} from 'react'
import Register from '../Authentication/Register'

class Home extends Component{
    
    componentDidMount(){
        console.log("Component did Mount");
        this.getUser();
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
    render(){
        return(
            <div>
                   {/* <h3>Status: {this.props.logged_in}</h3>  */}
                {/* <button onClick={()=> this.handleLogoutClick()}>Logout</button> */}
                <Register  handleRegister={this.handleRegister} handleSuccessfulAuth={this.props.handleSuccessfulAuth}/>
                <video  autoplay loop src="https://isorepublic.com/wp-content/uploads/2018/06/isorepublic-free-video-man-playing-basketball.mp4" poster=""controls  width="600"  align="right"></video>
            </div>
        )
    }
}
export default Home