export interface IState {
    addresses: object[];
    redirect: boolean;
    collapse: boolean;
    amount: number;

    calculateAction?(): void;
    addAddressAction?(): void;
    deleteAddressAction?(): void;
    backToMainAction?():void;
}