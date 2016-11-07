// JS
import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

// Components
import Home               from './Home';
import CurrentMatches     from '../CurrentMatches/CurrentMatches';
import HomepageHeader     from '../HomepageHeader/HomepageHeader';

let matches = [
  { title: "BSE vs Stowmarket", date: "12-12-2015", time: "11:00" }
];

describe("<Home />", function() {
  it("should render HomepageHeader", function() {
    const wrapper = shallow(<Home />);
    expect(
      wrapper.find(HomepageHeader)
    ).to.have.length(1)
  });

  it("should render CurrentMatches", function() {
    const wrapper = shallow(<Home />);
    expect(
      wrapper.find(CurrentMatches)
    ).to.have.length(1)
  });
});
