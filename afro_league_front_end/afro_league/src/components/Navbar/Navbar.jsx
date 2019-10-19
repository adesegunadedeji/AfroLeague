import React, {Component} from 'react';
import {Collapse, Navbar, NavbarToggler,Button, NavbarBrand, Nav, NavItem, NavLink, Form, Input, FormGroup} from 'reactstrap';
class NavbarReact extends Component{

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true,
          username: null,
          email: null,
          password: null
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
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

      render() {
        return (
          <div>
            <Navbar className = "Navbar" light>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <img src="http://www.michael-weinstein.com/wp-content/uploads/2015/04/nba_africa-logo1.png" width="60" height="60" alt="nbaLogo"/>
            <NavbarBrand href="/" className="mr-auto">afroLeague</NavbarBrand>
            <Form onSubmit = {this.handleSubmit} className="form-inline">
                  <FormGroup>
                    <Input type="username" name="username" className="LoginForm" placeholder="username" onChange={this.handleChange} />
                    <Input type="email" name="email" className="LoginForm" placeholder="Email" onChange={this.handleChange} />
                    <Input type="password" name="password"className="LoginForm"  placeholder="Password" onChange={this.handleChange} />
                    <Button outline color="success">Login</Button>
                    {/* <Register  handleRegister={this.props.handleRegister} handleSuccessfulAuth={this.props.handleSuccessfulAuth}/> */}
                </FormGroup>
                  </Form>
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem className="navItem">
                    <NavLink href="/about">about</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="/contact/">contact</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="/newPlayer/">New Player</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="/players">Roster</NavLink>
                  </NavItem>
                  <NavItem className="navItem">
                    <NavLink href="https://github.com/adesegunadedeji">gitHub</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }

}
export default NavbarReact