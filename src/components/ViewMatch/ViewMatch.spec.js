// Components
import { ViewMatch } from './ViewMatch';

const match = {
  title: "BSE vs Stowmarket",
  date: "12-12-2015",
  time: "11:00"
}

describe("<ViewMatch />", () => {
  it("should have the string 'BSE vs Stowmarket' ", () => {
    const wrapper = shallow(<ViewMatch match={match}/>);
    expect(
      wrapper.contains(match.title)
    ).to.equal(true);
  });
});
