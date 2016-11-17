// Components
import NotFound           from './NotFound';

describe("<NotFound />", () => {
  it("should have the string '404 Not Found :(' ", () => {
    const wrapper = shallow(<NotFound />);
    expect(
      wrapper.contains("404 Not Found :(")
    ).to.equal(true);
  });
});
