import React from 'react';
import Button from "react-bootstrap/Button";
import {Form} from 'react-bootstrap';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            subject: '',
            message: '',
        };
        this.handleNameChange = e => {
            e.preventDefault();
            this.setState({name: e.target.value});
        };
        this.handleSubjectChange = e => {
            e.preventDefault();
            this.setState({subject: e.target.value});
        };
        this.handleMessageChange = e => {
            e.preventDefault();
            this.setState({message: e.target.value});
        };
        this.handleClick = e => {
            e.preventDefault();
            alert('Dear ' + this.state.name + ", Thank you for the opinion!")
        };
    }
    componentDidMount() {
        document.title = 'Contact Me';
    }

    render() {
      return (
         <div>  
            <h1>Contact Form</h1>

            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={this.handleNameChange} placeholder="Your name..." />
                    <Form.Text className="text-muted">
                        We'll never share your data with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicSubject">
                    <Form.Label>Your Subject</Form.Label>
                    <Form.Control onChange={this.handleSubjectChange} placeholder="Your subject..." />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Your Message</Form.Label>
                        <Form.Control onChange={this.handleMessageChange} as="textarea" rows="3" placeholder="Your Message..."/>
                </Form.Group>

                <Button onClick={this.handleClick} variant="primary" type="submit">Submit</Button>
            </Form>
         </div>
      )
   }
}
export default Contact;