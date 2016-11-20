import { ADD_MATCH } from '../constants/actionTypes';

export const matches = (state = [], action) => {
  switch(action.type) {
    case ADD_MATCH: {
      let newMatch = {
        id:     +new Date,
        title:  action.data.title,
        date:   action.data.date,
        time:   action.data.time
      }
      return state.concat([newMatch]);
    }
    default: {
      return state;
    }
  }
};
