import * as React from 'react';
import {Button, Col, FormGroup, Input, Row, Container} from "reactstrap";
import {ReactNode} from "react";

export default class Address extends React.Component<any> {
    public changeAddress = (): void => {
        console.log('change')
    };

    public render(): ReactNode {
        return (
            <Container>
                <Row>
                    <Col md="10">
                        <FormGroup >
                            <Input type="text"
                                   name="email"
                                   onChange={this.changeAddress}
                                   placeholder="Enter your address" />
                        </FormGroup>
                    </Col>
                    <Col md="2">
                        <Button type="button"
                                color="danger"
                                onClick={this.props.delete}
                                disabled={this.props.disableButton}>
                            Remove
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

