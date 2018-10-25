import {ACTIONS, ADDRESS} from "../constants";

const addressesState = [
    ADDRESS
];

export default (state = addressesState, action: any) => {
    switch(action.type) {
        case ACTIONS.ADD_ADDRESS:
            return [
                ...state,
                action.payload
            ];
        case ACTIONS.DELETE_ADDRESS:
            const index = state.findIndex(data => {
                return data.id === action.payload
            });
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}