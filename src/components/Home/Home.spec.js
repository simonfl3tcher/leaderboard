// JS
import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

// Components
import { Home }           from './Home';
import CurrentMatches     from '../CurrentMatches/CurrentMatches';
import Header             from '../Header/Header';

let matches = [
  { title: "BSE vs Stowmarket", date: "12-12-2015", time: "11:00" }
];

describe("<Home />", () => {
  it("should render header", () => {
    const wrapper = shallow(<Home matches={matches} />);
    expect(
      wrapper.find(Header)
    ).to.have.length(1)
  });

  it("should render CurrentMatches", () => {
    const wrapper = shallow(<Home matches={matches} />);
    expect(
      wrapper.find(CurrentMatches)
    ).to.have.length(1)
  });
});
