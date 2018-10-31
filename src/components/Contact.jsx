import React, {Component} from 'react';
import {Segment, Button, Form, TextArea} from 'semantic-ui-react';

class Contact extends Component {
    render() {
        return(
            <div id='contact' className="page-height">
                    <Segment padded="very">
                        <h2>Contact</h2>
                        <Form>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='First Lastname' />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Email' />
                            </Form.Field>
                            <Form.Field control={TextArea} label="Message" placeholder="Your message goes here...">
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                </div>
        );
    }
}

export default Contact;