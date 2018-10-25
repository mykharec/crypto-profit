import * as React from 'react';
import {ReactNode} from "react";
import {Alert, Button, Col, Container, Row} from 'reactstrap';
import {connect} from "react-redux";

import Address from "../address/Address";
import {IStore} from "../../interfaces/store";
import addAddress from "../../actions/addAddress";
import removeAddress from "../../actions/removeAddress";
import {IAddress} from "../../interfaces/address";

class Addresses extends React.Component<any> {
    public render(): ReactNode {
        const {addresses} = this.props;

        return (
            <Container>
                <Row>
                    <Col>
                        <Alert color="success">
                            You can use your <b>address</b>  for calculation
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            addresses.map((address: IAddress) => {
                            return (
                                <Address key={address.id}
                                         delete={() => this.props.removeAddress(address.id)}
                                         disableButton={this.props.addresses.length === 1}/>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row>
                    <Button color="primary"
                            block
                            onClick={this.props.addAddress}>
                        Add Address
                    </Button>
                </Row>
            </Container>
        )
    }
}


const mapStateToProps = (store: IStore) => ({
        addresses: store.addresses,
});

const dispatchStateToProps = (dispatch: any) => ({
    addAddress: (): void => {
        dispatch(addAddress())
    },
    removeAddress: (id: number): void => {
        dispatch(removeAddress(id))
    }
});

export default connect(mapStateToProps, dispatchStateToProps)(Addresses);