import React , {Component} from 'react';
import './App.css';
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'

import {BrowserRouter,Route,Switch} from 'react-router-dom'

class App extends Component {
      constructor(){
        super();
        this.state = {
          logged_in: "Not logged_In",
          user:{}
        }
        this.handleLogin = this.handleLogin.bind(this)
      }

      handleLogin(parsedResponse){
        this.setState({
          logged_in: "Logged In",
          user: parsedResponse
        })
      }

      componentDidMount(){
        console.log("Component Did Mount")
        this.checkLoginStatus()
      }

      checkLoginStatus = async()=>{
        try{ 
        const loginStatus  = await fetch("http://localhost:3001/logged_in",{
            method: "GET",
            withCredentials: true
        });
        console.log("Loggedin??",loginStatus)
      }
      catch(err){
        console.log(err)
      } 
    }
  render(){
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path={"/"} 
      render = {props =>(
        <Home {...props} handleLogin ={this.handleLogin}
        logged_in = {this.state.logged_in}/>
      )} />
      <Route 
      exact path={"/dashboard"}
       render ={props => (
         <Dashboard {...props}
         logged_in = {this.state.logged_in}/>
       )}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
  }
}

export default App;
