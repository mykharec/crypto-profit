import * as React from 'react';
import {connect} from 'react-redux';
import {Button} from "reactstrap";
import {ReactNode} from "react";

import './Profit.css';
import {IStore} from "../../interfaces/store";

class Profit extends React.Component<any> {
    public back = (): void => {
        this.props.history.push('/');
    };

    public render(): ReactNode {
        const { profitPage } = this.props;

        return (
            <section>
                <div className="Profit">
                    <span className={profitPage.amount > 0 ? 'Success' : 'Lesion'}>
                        {profitPage.amount > 0 ? '+' : ''}
                    </span>
                    <span className={profitPage.amount > 0 ? 'Success' : 'Lesion'}>
                        {profitPage.amount}$
                    </span>
                </div>

                <Button type="submit"
                        color="success"
                        style={{display: 'block', height: '100%'}}
                        onClick={this.back}>
                    Check another address
                </Button>
            </section>
        )
    }
}

const mapPropsToState = (store: IStore) => ({
    profitPage: store.page
});

export default connect(mapPropsToState)(Profit);