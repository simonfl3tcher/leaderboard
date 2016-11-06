import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

import CurrentMatches     from './CurrentMatches';
import MatchRow           from '../MatchRow/MatchRow';

let matches = [
  { title: "BSE vs Stowmarket", date: "12-12-2015", time: "11:00" }
];

describe("<MatchRow />", function() {

  describe("when a match is set", function() {
    it("should render a MatchRow", function() {
      const wrapper = shallow(<CurrentMatches matches={matches}/>);
      expect(wrapper.find(MatchRow)).to.have.length(1);
    });
  });

  describe("when a match is not set", function() {
    it("should display the string 'There are no matches happening right now :('", function(){
      const wrapper = shallow(<CurrentMatches matches={[]} />);
      expect(
        wrapper.contains("There are no matches happening right now :(")
      ).to.equal(true);
    });
  });

});
