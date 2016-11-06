import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

import HomepageHeader     from './HomepageHeader';

describe("<Footer />", function() {
  it("should have the string 'Welcome to Leaderboard' ", function() {
    const wrapper = shallow(<HomepageHeader />);
    expect(
      wrapper.contains("Welcome to Leaderboard")
    ).to.equal(true);
  });
});
