import React , {Component} from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
         })
        console.log(this.state)
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Submitted Form")
        //Add Handle Register Function
        this.props.handleRegister(this.state)
    }

    render(){
        return (
            <div className="register">
                <h1> Register</h1>
                <form onSubmit ={this.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type ="text" name = "username"  onChange={this.handleChange}/>
                <label htmlFor="email">email</label>
                <input type ="text" name = "email"  onChange={this.handleChange}/>
                <label htmlFor="password">Password</label>
                <input type ="password" name = "password" onChange={this.handleChange}/>
                <input type ="submit"></input>
                </form>
            </div>
    
        )
    }

}
export default Register 