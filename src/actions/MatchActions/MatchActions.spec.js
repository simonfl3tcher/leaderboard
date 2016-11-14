// JS
import { expect }         from 'chai';

// Action
import * as actions  from './MatchActions';
import { ADD_MATCH } from '../../constants/actionTypes';

describe("actions", () => {
  it("should create an action to add a match", () => {
    const match = {
      title: "BSE vs Stowmarket",
      date: "12-12-2015",
      time: "11:00"
    }

    const expectedAction = {
      type: ADD_MATCH,
      data: match
    }

    expect(
      actions.addMatch(match)
    ).to.deep.equal(expectedAction)
  })
})
