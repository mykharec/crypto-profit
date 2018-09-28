import { ChainSoClient } from './chainSoClient';

export class AddressData {
    private chainSo: ChainSoClient
    constructor(private address: string) {
        this.chainSo = new ChainSoClient()
    }

    public async getReceivedTxs() {
        this.address = this.address + '2'
        const data = this.chainSo.get_tx_received('LTC', 'LVWaQGxokH5G3d8si2QyYXUb54rK2m5NMH')
        return data;
    }
}