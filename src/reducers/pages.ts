import {ACTIONS} from "../constants";

const loginState = {
    amount: 0,
};

export default (state = loginState, action: any) => {
    switch(action.type) {
        case ACTIONS.CALCULATE_SUCCESS:
            return {
                ...state,
                amount: action.payload
            };
        default:
            return state;
    }
}