import { Formik } from 'formik';
import * as React from 'react';
import {Col, Container, Row, Button, Alert, Collapse, CardBody, Card} from 'reactstrap';
import {Redirect} from "react-router-dom";
// import * as Yup from 'yup';

import PathPhrase from '../pathphrase-login/PathPhraseLogin';
import Addresses from '../address-login/AddressLogin';

import './Login.css';

class Login extends React.Component {
    public state = {
        collapse: false,
        redirect: false
    };

    public handleCalculation =() => {
        this.setState({
            redirect: true
        })
}

    public render() {
        if (this.state.redirect) {
            return <Redirect push to="/profit" />;
        }
        return (
            <Formik initialValues={{ pathphrase: ''}}
                        onSubmit={(values: any, actions: any) => {
                            console.log(values)
                        }}
                >
                    {props => {
                        // const {
                        //     handleSubmit,
                        // } = props;

                        return (
                            <Container>
                                <Row className="Header">
                                    <Col md="12">
                                        <h1>Calculate your profite</h1>
                                    </Col>
                                    <Col>
                                        <Alert color="success">
                                            You can enter <b>SECURITY PATH PHRASE</b> or <b>ADDRESS</b>
                                        </Alert>
                                    </Col>
                                </Row>
                                <Row className="Login">
                                    <Col>
                                        <Button color="primary"
                                                id="pathphrase"
                                                block
                                                style={{ marginBottom: '1rem' }}>
                                            Path Phrase
                                        </Button>
                                        <Collapse toggler="#pathphrase" isOpen={this.state.collapse = true}>
                                            <Card>
                                                <CardBody>
                                                    <Row md="12" className="Pathphrase">
                                                        <Col>
                                                            <PathPhrase />
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Collapse>

                                        <Button color="primary"
                                                id="address"
                                                block
                                                style={{ marginBottom: '1rem' }}>
                                            Address
                                        </Button>
                                        <Collapse toggler="#address" isOpen={this.state.collapse}>
                                            <Card>
                                                <CardBody>
                                                    <Row md="12" className="Addresses">
                                                        <Col>
                                                            <Addresses />
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Collapse>

                                    </Col>
                                </Row>

                                <Row className="CalculateButton">
                                    <Button type="submit"
                                            color="success"
                                            disabled={false}
                                            onClick={this.handleCalculation}>
                                        Calculate
                                    </Button>
                                </Row>
                            </Container>
                        )
                    }}
                </Formik>
        )
    }
}

export default Login;


