
import React from 'react';
import { Form, Input, NavLink,Button,col} from 'reactstrap';
function Contact(){
    return(
        <div>
            <NavLink href="/" className= "homeReference"> Back to home</NavLink>
            <h1> Contact us</h1>
            <p>Whether you have a question about fixtures, stats or anything else, our team is ready to answer all your questions </p>
            <Form action="https://formspree.io/xargnwgm" method="POST">
            <Input   className="LoginForm"  placeholder="Name" type="text" width="40px" name="name"/>
            <Input type="text" className="LoginForm" col={2} placeholder="Email" width="40px"  name="_replyto"/>
            <Input type="textarea" className="LoginForm"  placeholder="Message" width="40px"  name="message"/>
            <Button  type="submit" className="LoginForm"  value="Send">Send</Button>
            </Form>
        </div>
    )
}
export default Contact