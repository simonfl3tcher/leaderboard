// JS
import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

// Components
import NotFound           from './NotFound';

describe("<NotFound />", function() {
  it("should have the string '404 Not Found :(' ", function() {
    const wrapper = shallow(<NotFound />);
    expect(
      wrapper.contains("404 Not Found :(")
    ).to.equal(true);
  });
});
