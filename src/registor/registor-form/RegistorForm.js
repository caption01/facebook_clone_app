import React from 'react'
import {Form, Col, Button} from 'react-bootstrap'
import './RegistorForm.css'

class RegistorForm extends React.Component {


    render(){

        return(
            <div>
                <Form>
                    <h2>Create Account</h2>
                    <Form.Group >
                        <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                        </Form.Row>
                    </Form.Group>
                
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group >
                        <Form.Check type="checkbox" label="i love you" />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default RegistorForm