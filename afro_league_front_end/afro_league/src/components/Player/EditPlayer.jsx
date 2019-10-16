
import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Col, Form, FormGroup, Label, Input} from 'reactstrap';

class EditPlayer extends Component{
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      player: props.player.player,
      position:props.player.position,
      team:props.player.team,
      coach: props.player.coach
    }

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
handleChange = (e)=>{
this.setState({
    [e.target.name]: e.target.value
})
}
handleSubmit= async (e)=>{
    e.preventDefault();
    console.log("Ready to Edit")
    const validUpdate = await this.props.updatePlayer(this.props.player._id, this.state);
    if(validUpdate === true){
        this.toggle(); 
    }
}
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}> Edit {this.props.player.player}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} charCode="X">{this.state.name}</ModalHeader>
          <ModalBody className ="modal-body">
              <Form onSubmit = {this.handleSubmit}>
              <FormGroup row>
          <Label for="exampleEmail2" sm={2}> Player</Label>
          <Col sm={10}>
                <Input type="text" name="player" onChange={this.handleChange} value={this.state.player}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail2" sm={2}> Position</Label>
          <Col sm={10}>
                <Input type="text" name="position"onChange={this.handleChange}value={this.state.position}/>
                </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail2" sm={2}> Team</Label>
          <Col sm={10}>
                <Input type="text" name="team"onChange={this.handleChange}value={this.state.team}/>
                </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}> Coach</Label>
          <Col sm={10}>
                <Input type="text" name="coach"onChange={this.handleChange}value={this.state.coach}/>
                </Col>
        </FormGroup>
              </Form>
           </ModalBody>
          <ModalFooter>
            <Button outline color="success" onClick={this.handleSubmit}>Edit Player Profile{' '}</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default EditPlayer;