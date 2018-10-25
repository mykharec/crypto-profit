import removeAddress from '../../src/actions/removeAddress';
import {ACTIONS} from '../../src/constants';

describe('removeAddress action', () => {
    it('Should remove address from list', () => {
        const id = 1;
        const expectedAction = {
            type: ACTIONS.DELETE_ADDRESS,
            payload: id
        };

        expect(removeAddress(id)).toEqual(expectedAction);
    })
});
