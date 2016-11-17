// Components
import MatchRow           from './MatchRow';

let match = {
  title: "BSE vs Stowmarket",
  date: "12-12-2015",
  time: "11:00"
}

describe("<MatchRow />", () => {
  it("should have string of text describing the match title", () => {
    const wrapper = shallow(<MatchRow data={match}/>);
    expect(
      wrapper.contains("BSE vs Stowmarket")
    ).to.equal(true);
  });
});
