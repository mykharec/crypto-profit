import * as React from 'react';
import {Alert, Col, Container, Form, FormGroup, Input, Row} from "reactstrap";

class PathPhrase extends React.Component {
    public render() {
        return (
            <section>
                <Col>
                    <Alert color="success">
                        Use your <b>12 words</b> security path phrase for calculation
                    </Alert>
                </Col>

                <Form>
                    <Container>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Input type="text"
                                           name="email"
                                           placeholder="Enter security path phrase" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </section>
        )
    }
}

export default PathPhrase;