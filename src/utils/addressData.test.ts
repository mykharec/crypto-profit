import { AddressData } from './addressData';


it('get data from chain.so', () => {
  const addrData = new AddressData('LVWaQGxokH5G3d8si2QyYXUb54rK2m5NMH');
  addrData.getReceivedTxs();
});
