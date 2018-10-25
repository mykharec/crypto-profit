import addresses from '../../src/reducers/addresses';
import {ACTIONS, ADDRESS} from "../../src/constants";

describe('addresses reducer', () => {
    it('Should return initial state', () => {
        const addressesInitialState = {
            ADDRESS
        };

        expect(addresses(undefined, {})).toEqual([
            addressesInitialState
        ])
    });

    it(`Should handle ${ACTIONS.ADD_ADDRESS} action`, () => {
        const addAddressAction = {
            type: ACTIONS.ADD_ADDRESS,
            payload: [
                ADDRESS,
                {
                    id: new Date().getTime(),
                    value: ''
                }
            ]
        };

        expect(addresses([], addAddressAction)).toEqual(addAddressAction);
    })
});
