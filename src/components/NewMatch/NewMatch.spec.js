// JS
import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

// Components
import NewMatch           from './NewMatch';

describe("<NewMatch />", function() {
  it("should have the string 'Create Match here!' ", function() {
    const wrapper = shallow(<NewMatch />);
    expect(
      wrapper.contains("Create Match here!")
    ).to.equal(true);
  });
});
