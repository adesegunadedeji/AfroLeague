import React , {Component} from 'react';
import './App.css';
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import NewPlayer from './components/Player/NewPlayer'
import Footer from './components/Footer/Footer'

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Player from './components/Player/Player';
import NavbarReact from './components/Navbar/Navbar';

class App extends Component {
      constructor(){
        super();
        this.state = {
          logged_in: "Not logged_In",
          user:{}
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
      }

      componentDidMount(){
        console.log("Component Did Mount")
        this.checkLoginStatus()
      }


      handleLogin(parsedResponse){
        this.setState({
          logged_in: "Logged In",
          user: parsedResponse
        })
      }

      handleLogout() {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        });
      }

      checkLoginStatus = async()=>{
        try{ 
        const loginStatus  = await fetch(`http://localhost:3001/logged_in`,{
            method: "GET",
            credentials: "include",
            headers:{
              "Content-Type": "application/json",
              "acccept": "application/json"
          }
        });
        const parsedResponse = await loginStatus.json();
        console.log("Loggedin??",parsedResponse)
      }
      catch(err){
        console.log(err)
      } 
    }

    createPlayer =async(formData) =>{
      try{
          console.log("CREATING NEW PLAYER")
          const newPlayer = await fetch('http://localhost:3001/leagues',{
              method:"POST",
              body: JSON.stringify(formData),
              headers:{
                  "Content-Type": "application/json",
                  "acccept": "application/json"
              }
          })
          const parsedResponse = await newPlayer.json();
          console.log(parsedResponse)
          if(parsedResponse){
              this.setState({
                  player: [parsedResponse,...this.state.player]
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
      <NavbarReact/>
    <BrowserRouter>
    <Switch>
      <Route exact path={"/"} 
      render = {props =>(
        <Home {...props} handleLogin ={this.handleLogin}
        logged_in = {this.state.logged_in} handleLogout={this.handleLogout}/>
      )} />
      <Route 
      exact path={"/dashboard"}
       render ={props => (
         <Dashboard {...props}
         logged_in = {this.state.logged_in}/>
       )}/>
       <Route exact path={"/players"} component ={Player}/>
       < Route path ='/newPlayer' render={(props)=> <NewPlayer {...props} 
       createPlayer={this.createPlayer}/>}/>
    </Switch>
    </BrowserRouter>
    <Footer/>
    </div>
  );
  }
}

export default App;
