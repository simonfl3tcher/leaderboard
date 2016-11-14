// JS
import React              from 'react';
import { mount, shallow } from 'enzyme';
import { expect }         from 'chai';

// Components
import { NewMatch }       from './NewMatch';

const match = {
  title: "BSE vs Stowmarket",
  date: "12-12-2015",
  time: "11:00"
}

describe("<NewMatch />", () => {
  it("should have the string 'Create Match here!' ", () => {
    const wrapper = shallow(<NewMatch match={match}/>);
    expect(
      wrapper.contains("Create Match!")
    ).to.equal(true);
  });
});
