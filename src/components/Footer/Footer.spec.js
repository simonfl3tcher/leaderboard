// JS
import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

// Components
import Footer             from './Footer';

describe("<Footer />", function() {
  it("should have the string 'Made by Simon Fletcher' ", function() {
    const wrapper = shallow(<Footer />);
    expect(
      wrapper.contains("Made by Simon Fletcher")
    ).to.equal(true);
  });
});
