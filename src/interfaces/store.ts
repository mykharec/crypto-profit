import {IAddress} from "./address";

export interface IStore {
    addresses: IAddress[],
    page: {amount: number}
}