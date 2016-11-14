// JS
import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

// Components
import CurrentMatches     from './CurrentMatches';
import MatchRow           from '../MatchRow/MatchRow';

let matches = [
  { title: "BSE vs Stowmarket", date: "12-12-2015", time: "11:00" }
];

describe("<MatchRow />", () => {

  describe("when a match is set", () => {
    it("should render a MatchRow", () => {
      const wrapper = shallow(<CurrentMatches matches={matches}/>);
      expect(
        wrapper.find(MatchRow)
      ).to.have.length(1);
    });
  });

  describe("when a match is not set", () => {
    it("should display the string 'There are no matches happening right now :('", () => {
      const wrapper = shallow(<CurrentMatches matches={[]}/>);
      expect(
        wrapper.contains("There are no matches happening right now :(")
      ).to.equal(true);
    });
  });
});
