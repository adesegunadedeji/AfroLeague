import React, {Component} from 'react'
import { Button, Col, Form, FormGroup, Label, Input} from 'reactstrap';
class NewPlayer extends Component{

    constructor(props){
        super(props);
        this.state = {
            player: "",
            position:"",
            team: "",
            coach: ""
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createPlayer(this.state);
    }

render(){
return(
    <div>
        <h1>New Player</h1>
        <Form onSubmit = {this.handleSubmit}>
            <FormGroup row>
                <Label for="exampleEmail2" sm={2}> Player</Label>
                <Col sm={5}>
                <Input type="text" name="player" onChange={this.handleChange}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleEmail2" sm={2}> Position</Label>
                <Col sm={5}>
                <Input type="text" name="position"onChange={this.handleChange}/>
                </Col>
            </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Team</Label>
          <Col sm={5}>
                <Input type="text" name="team" onChange={this.handleChange}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}>Coach</Label>
          <Col sm={5}>
                <Input type="text" name="coach" onChange={this.handleChange}/>
                </Col>
        </FormGroup>
        <Button>Add Player</Button>
        </Form>
            </div>
        )
    }
}
export default NewPlayer