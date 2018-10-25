import addAddress from '../../src/actions/addAddress';
import {ACTIONS} from "../../src/constants";


describe('addAddress action', () => {
    it('Should create an action to add address', () => {
        const address = {id: 1, value: ''};
        const expectedAction = {
            type: ACTIONS.ADD_ADDRESS,
            payload: address
        };

        expect(addAddress()).toEqual(expectedAction);
    })
});
