import {IHistory} from "./history";
import {ILocation} from "./location";
import {IMatch} from "./match";

export interface IProps {
    addressPage: {amount: number}
    history: IHistory;
    location: ILocation;
    match: IMatch
    calculate: () => void;
}