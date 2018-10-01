import * as React from 'react';
import {Button, Col, FormGroup, Input, Row, Container} from "reactstrap";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Address extends React.Component {

    public changeAddress = () => {
        console.log('change')
    };


    public render() {
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
                            // @ts-ignore
                                onClick={this.props.delete}>
                            {/*<FontAwesomeIcon icon="trash" />*/}
                            Remove
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

