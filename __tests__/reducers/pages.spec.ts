import pages from '../../src/reducers/pages';
import {ACTIONS} from "../../src/constants";

const pagesInitialState = {
    amount: 0
};

describe('pages reducer', () => {
    it('Should return initial state', () => {
        expect(pages(undefined, {})).toEqual(pagesInitialState);
    });

    it(`Should handle ${ACTIONS.CALCULATE_SUCCESS} action`, () => {
        const calculateAction = {
            type: ACTIONS.CALCULATE_SUCCESS,
            payload: 10
        };

        const expectedState = {
            amount: 10
        };

        expect(pages(pagesInitialState, calculateAction)).toEqual(expectedState);
    })

});