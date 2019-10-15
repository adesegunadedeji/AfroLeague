import React , {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null,
            registrationErrors: ""
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
        console.log("Submitted Form")
        // //Add Handle Register Function
        this.props.handleRegister(this.state)
    }

    render(){
        return (
            <div className="register">
                <h1>Register</h1>
<Form inline onSubmit ={this.handleSubmit}>
    <FormGroup>
        <Label for="exampleEmail" hidden>Username</Label>
        <Input type="username" name="username" id="exampleusername" placeholder="username" onChange={this.handleChange} />
    </FormGroup>
    <FormGroup>
        <Label for="exampleEmail" hidden>Email</Label>
   <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={this.handleChange} />
 </FormGroup>
 {' '}
 <FormGroup>
   <Label for="examplePassword" hidden>Password</Label>
   <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handleChange} />
 </FormGroup>
    {' '}
    <Button>Submit</Button>
    </Form>
</div>
    
        )
    }

}
export default Register 