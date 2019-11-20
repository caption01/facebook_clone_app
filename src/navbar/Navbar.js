import React from 'react';
import './Navbar.css';
import { Col, Navbar, Row, Form, Button, Image, ButtonGroup} from 'react-bootstrap';

class NavbarHead extends React.Component {

    render(){

        if(!this.props.statusLogIn) {
            return(
                <div className='navbar-head'>
                    <Navbar bg="primary" variant="dark" id='navbar-body'>
                        <div className='navbar-body-content'>
                            <Col className='navbar-body-col'>
                                <Navbar.Brand id='navbar-text-header' href="#home">Facebook</Navbar.Brand>
                            </Col>
                            <Col className='navbar-body-col flex-row-reverse'>
                                <Navbar.Brand >
                                    <Form>
                                        <Row>
                                            <Col>
                                                <Form.Control placeholder="email" />
                                            </Col>
                                            <Col>
                                                <Form.Control placeholder="password" type='password' />
                                            </Col>
                                            <Button variant="light" onClick={()=>this.props.handleLonIn()}>Signin</Button>
                                        </Row>
                                    </Form>
                                </Navbar.Brand>
                            </Col>
                        </div>
                    </Navbar>    
                </div>
            )
        } else {
            return(
                <div className='navbar-head'>
                    <Navbar bg="primary" variant="dark" id='navbar-body'>
                        <div className='navbar-body-content'>
                            <Col className='navbar-body-col'>
                                <Button className='mr-2'>
                                <Image className='navbar-logo' src="https://i.ibb.co/XYPhqY5/facebook.jpg" rounded />
                                </Button>
                                <Form.Control placeholder="search" type='text' />
                            </Col>
                            <Col className='navbar-body-col flex-row-reverse'>
                                <Navbar.Brand >
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="primary">
                                            <Image className='navbar-logo-profile mr-2' src="https://cdn3.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg0" roundedCircle />
                                            nutchapon
                                        </Button>
                                        <Button variant="primary">main</Button>
                                        <Button variant="primary">create</Button>
                                    </ButtonGroup>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="primary">
                                            <i className="fas fa-user-friends navbar-logo-icon"></i>
                                        </Button>
                                        <Button variant="primary">
                                            <i className="fab fa-facebook-messenger navbar-logo-icon"></i>
                                        </Button>
                                        <Button variant="primary">
                                            <i className="fas fa-bell navbar-logo-icon"></i>
                                        </Button>
                                        <Button variant="primary" onClick={()=>this.props.handleLogOut()}>Logout</Button>
                                    </ButtonGroup>
                                </Navbar.Brand>
                            </Col>
                        </div>
                    </Navbar>    
                </div>
            )
        }

        
    }
}


export default NavbarHead