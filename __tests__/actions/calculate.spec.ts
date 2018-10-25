import calculate from '../../src/actions/calculate';
import {ACTIONS} from "../../src/constants";

describe('calculate action', () => {
    it('Should calculate profit', () => {
        const expectedAction = {
            type: ACTIONS.CALCULATE_SUCCESS,
            payload: 10
        };

        expect(calculate()).toEqual(expectedAction);
    })
});
