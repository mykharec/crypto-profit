import {ACTIONS} from "../constants";
import {IAction} from "../interfaces/action";

export default (id: number): IAction => (
    {
        type: ACTIONS.DELETE_ADDRESS,
        payload: id
    }
)