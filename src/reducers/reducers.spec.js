// JS
import { expect }         from 'chai';
import { useFakeTimers }  from 'sinon';
import { ADD_MATCH }      from '../constants/ActionTypes';
import { matches }        from './reducers';

describe("matches reducer", () => {
  var date;

  before(() => {
    date = useFakeTimers(new Date(2011,9,1).getTime());
  });

  it('should return the initial state', () => {
    expect(
      matches(undefined, {})
    ).to.eql([]);
  });

  it("should handle ADD_MATCH", () => {
    expect(
      matches([], {
        type: ADD_MATCH,
        data: {
          title: "Example",
          date:  "12/05/16",
          time:  "11:00"
        }
      })
    ).to.eql(
      [
        {
          id: +new Date,
          title: "Example",
          date:  "12/05/16",
          time:  "11:00"
        }
      ]
    )

    expect(
      matches(
        [
          {
            id: +new Date,
            title: "Example 1",
            date:  "12/04/16",
            time:  "10:00"
          }
        ],
        {
          type: ADD_MATCH,
          data: {
            title: "Example 2",
            date:  "12/05/16",
            time:  "11:00"
          }
        }
      )
    ).to.eql(
      [
        {
          id: +new Date,
          title: "Example 1",
          date:  "12/04/16",
          time:  "10:00"
        },
        {
          id: +new Date,
          title: "Example 2",
          date:  "12/05/16",
          time:  "11:00"
        }
      ]
    )
  });

  after(() => {
    date.restore();
  });
})
