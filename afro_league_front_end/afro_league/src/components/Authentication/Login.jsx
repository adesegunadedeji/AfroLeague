import React , {Component} from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null
        }
    }
    handleChange=(e)=>{
        console.log(this.state)
        this.setState({
            [e.target.name]:e.target.value
         })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("FORM SUBMITTED")
         this.props.handleLogin(this.state)
    }

    render(){
        return (
            <div className="login">
                <h1> Login</h1>
                <form onSubmit ={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type ="text" name = "username" onChange={this.handleChange}/>
                <label htmlFor="email">email</label>
                <input type ="text" name = "email" onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
                <input type ="password" name = "password" onChange={this.handleChange}/>
                <button type ="submit">Login</button>
                </form>
            </div>
    
        )
    }

}
export default Login