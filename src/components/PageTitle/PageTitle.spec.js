/*eslint-env mocha */
/*global React shallow expect */

// Components
import { PageTitle } from './PageTitle';

describe('<PageTitle />', () => {
  it('renders chidren when passed in', () => {
    const wrapper = shallow(
      <PageTitle>
        <h1>BSE vs Stowmarket</h1>
      </PageTitle>
    );
    expect(
      wrapper.contains('BSE vs Stowmarket')
    ).to.equal(true);
  });
});
