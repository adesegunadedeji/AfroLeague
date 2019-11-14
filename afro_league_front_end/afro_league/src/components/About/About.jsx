import React from 'react';
import { Form, Input, NavLink,Button, Row, Col} from 'reactstrap';
function About(){
    return(
        <div>
            <NavLink href="/" className= "homeReference"> Back to home</NavLink>
            <h1> Contact us</h1>
            <p>Have a question about fixtures, stats or anything else? Please do not hesitate to contact us directly.
                <br></br> Our team is ready to answer all your questions </p>
            <Form action="https://formspree.io/xargnwgm" method="POST">
            <Col sm={4}>
            <Input   className="LoginForm"  placeholder="Name" type="text" name="name"/>
            </Col>
            <Col sm={4}>
            <Input type="text" className="LoginForm" placeholder="Email"  name="_replyto"/>
            </Col>
            <Col  sm={8}>
            <Input type="textarea" className="LoginFormArea"  placeholder="Message"   name="message"/>
            </Col>
            <Col  sm={8}>
            <Button  type="submit" className="LoginForm"  value="Send">Send</Button>
            </Col>
            </Form>
        </div>
    )
}
export default About