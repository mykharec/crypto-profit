import * as React from 'react';
import {Col, Form} from "reactstrap";
import Addresses from "../addresses/Addresses";

class AddressLogin extends React.Component {
    public render() {
        return (
            <Col>
                <Form>
                    <Addresses/>
                </Form>
            </Col>
        )
    }
}

export default AddressLogin;