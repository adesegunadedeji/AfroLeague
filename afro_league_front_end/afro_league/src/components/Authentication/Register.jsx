import React , {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, FormGroup, Input, NavLink} from 'reactstrap';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            username: null,
            email: null,
            password: null,
        }
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }


    handleChange=(e)=>{
        console.log(this.state)
        this.setState({
            [e.target.name]:e.target.value
         })
    }
    handleSubmit= async (e)=>{
        e.preventDefault();
        console.log("Submitted Form")
        console.log("Ready to Edit")
        const validUpdate = await this.props.handleRegister(this.state)
        if(validUpdate === true){
            this.toggle();
        }
    }
    render(){
        return (
            <div>
                <div className="Signup">
                 <NavLink  href="#" onClick={this.toggle}>Sign up now</NavLink>
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle} className="modal-header" charCode="X">
              <img src = "http://www.michael-weinstein.com/wp-content/uploads/2015/04/nba_africa-logo1.png" width="60" height="60"/>
              Register</ModalHeader>
              <ModalBody className ="modal-body">
                  <Form onSubmit = {this.handleSubmit}>
                  <FormGroup>
                    <Input type="username" name="username"  className="LoginForm"  placeholder="username" onChange={this.handleChange} />
                    <Input type="email" name="email"   className="LoginForm" placeholder="Email" onChange={this.handleChange} />
                    <Input type="password" name="password"    className="LoginForm" placeholder="Password" onChange={this.handleChange} />
                </FormGroup>
                  </Form>
               </ModalBody>
              <ModalFooter>
                <Button outline color="success" onClick={this.handleSubmit}>Create User{' '}</Button>
                <Button outline color="danger" onClick={this.toggle}>Cancel {' '}</Button>
              </ModalFooter>
            </Modal>
          </div>
    )
    }

}
export default Register 