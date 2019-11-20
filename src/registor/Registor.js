import React from 'react'
import RegistorForm from './registor-form/RegistorForm.js'
import RegistContent from './registor-content/RegistContent.js'
import './Registor.css'
import {Row, Col} from 'react-bootstrap'


class Registor extends React.Component {


    render(){

        return(
            <div className='registor-form'>
                <div className='registor-form-body'>
                    <Row className='row-item-center' >
                        <Col>
                            <RegistContent />
                        </Col>
                        <Col>
                        <RegistorForm />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Registor