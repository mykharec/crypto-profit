import {IAction} from "../interfaces/action";
import {ACTIONS} from "../constants";

export default (): IAction => (
    {
        type: ACTIONS.ADD_ADDRESS,
        payload: {
            id: new Date().getTime(),
            value: ''
        }
    }
)

