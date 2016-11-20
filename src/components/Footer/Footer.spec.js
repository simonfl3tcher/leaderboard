/*eslint-env mocha */
/*global React shallow expect */

// Components
import Footer             from './Footer';

describe('<Footer />', () => {
  it('should have the string \'Made by Simon Fletcher\' ', () => {
    const wrapper = shallow(<Footer />);
    expect(
      wrapper.contains('Made by Simon Fletcher')
    ).to.equal(true);
  });
});
