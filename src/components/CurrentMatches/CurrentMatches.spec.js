import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

import CurrentMatches     from './CurrentMatches';
import MatchRow           from '../MatchRow/MatchRow';

let matches = [
  { title: "BSE vs Stowmarket", date: "12-12-2015", time: "11:00" }
];

describe("<MatchRow />", function() {
  it("should render a MatchRow when at least one match is defined", function() {
    const wrapper = shallow(<CurrentMatches matches={matches}/>);
    expect(wrapper.find(MatchRow)).to.have.length(1);
  });

  it("should display the string 'There are no matches happening right now :(' when no matches are defined", function(){
    const wrapper = shallow(<CurrentMatches matches={[]} />);
    expect(
      wrapper.contains("There are no matches happening right now :(")
    ).to.equal(true);
  });
});
