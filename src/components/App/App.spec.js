// JS
import React                       from 'react';
import { mount, shallow }          from 'enzyme';
import { expect }                  from 'chai';

// Components
import App from './App';

describe("<App />", () => {
  it("renders chidren when passed in", () => {
    const wrapper = shallow(
      <App>
        <h1>Example child</h1>
      </App>
    );
    expect(
      wrapper.contains("Example child")
    ).to.equal(true);
  });
});
