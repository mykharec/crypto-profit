import * as React from 'react';
import {Redirect} from "react-router-dom";
import {Button} from "reactstrap";

import './Profit.css'

class Profit extends React.Component {
    public state = {
        amount : -10,
        redirect: false
    };

    public ckeckOtherAddressHandler = () => {
        this.setState({
            redirect: true
        })
    }

    public render() {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }

        return (
            <section>
                <div className="Profit">
                    <span className={this.state.amount > 0 ? 'Success' : 'Lesion'}> {this.state.amount > 0 ? '+' : ''}</span>
                    <span className={this.state.amount > 0 ? 'Success' : 'Lesion'}> {this.state.amount}$</span>
                </div>

                <Button color="success"
                        size="large"
                        id="pathphrase"
                        style={{ marginBottom: '1rem' }} onClick={this.ckeckOtherAddressHandler}>
                    Check ouher address
                </Button>
            </section>
        )
    }
}

export default Profit;