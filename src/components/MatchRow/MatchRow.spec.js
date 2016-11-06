import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

import MatchRow           from './MatchRow';

var match = {
  title: "BSE vs Stowmarket",
  date: "12-12-2015",
  time: "11:00"
}

describe("<MatchRow />", function() {
  it("should have string of text describing the match title", function() {
    const wrapper = shallow(<MatchRow data={match}/>);
    expect(
      wrapper.contains("BSE vs Stowmarket")
    ).to.equal(true);
  });
});
