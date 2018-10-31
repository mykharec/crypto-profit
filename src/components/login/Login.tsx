import { Formik } from 'formik';
import * as React from 'react';
import {connect} from 'react-redux';
import {Col, Container, Row, Button, Alert, Collapse, CardBody, Card} from 'reactstrap';

import './Login.css';
import PathPhrase from '../pathphrase-login/PathPhraseLogin';
import Addresses from '../addresses/Addresses';
import {IProps} from "../../interfaces/props";
import {IStore} from "../../interfaces/store";
import calculate from "../../actions/calculate";

class Login extends React.Component<IProps> {
    public calculateIfValid = (): void => {
        this.props.calculate();
        this.props.history.push('/profit');
    };

    public render(): React.ReactNode {
        return (
            <Formik initialValues={{ pathphrase: ''}}
                    onSubmit={(values: any, actions: any) => {
                        console.log(values)
                    }}>
                    {() => {
                        return (
                            <Container>
                                <Row className="Header">
                                    <Col md="12">
                                        <h1>Calculate your profit</h1>
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
                                        <Collapse toggler="#pathphrase" isOpen={true}>
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
                                        <Collapse toggler="#address" isOpen={true}>
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
                                            onClick={this.calculateIfValid}>
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

const mapStateToProps = (store: IStore) => ({
    addressPage: store.page
});

const dispatchStateToProps = (dispatch: any) => ({
        calculate: (): void  => {
            dispatch(calculate())
        }
});

export default connect(mapStateToProps, dispatchStateToProps)(Login);



