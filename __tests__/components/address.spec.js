import { expect } from 'chai';
import { shallow } from 'enzyme';
import Address from '../../src/components/address/Address';
​
describe('<MyComponent />', () => {
    it('renders three <Foo /> components', () => {
        const wrapper = shallow(< Address / >);
        expect(wrapper.find('button')).to.have.lengthOf(3);
    });
}