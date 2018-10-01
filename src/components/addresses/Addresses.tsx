import * as React from 'react';
import Address from "../address/Address";
import {Alert, Button, Col, Container, Row} from 'reactstrap';

class Addresses extends React.Component {
    public state = {
        addresses: [
            {id: new Date().getTime(), value: ''}
        ]
    };

    public addAddressHandler = () => {
        const addresses = [...this.state.addresses];
        addresses.push({id: new Date().getTime(), value: ''});
        this.setState({
            addresses
        });
        console.log(this.state.addresses)
    };

    public removeAddressHandler = (addressId: number) => {
        console.log('addressId', addressId)
        const addresses = [...this.state.addresses];

        if(addresses.length > 1) {
            addresses.splice(addressId, 1);
        }
        this.setState({
            addresses
        })
    };

    public testAddress = (index: number) => {
        console.log(`Address with index ${index} is correct`)
    };

    public render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Alert color="success">
                            You can use your address for calculation
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.state.addresses.map((address: any, index: number) => {
                            return (
                                <Address key={address.id}
                                    // @ts-ignore
                                         delete={() => this.removeAddressHandler(index)}
                                         test={() => this.testAddress(index)}/>
                            )
                        })
                        }
                    </Col>
                </Row>
                <Row>
                    <Button color="primary"
                            block
                            onClick={this.addAddressHandler}>
                        Add Address
                    </Button>
                </Row>





            </Container>
        )
    }
}

export default Addresses;