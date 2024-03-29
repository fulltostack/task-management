import produce from 'immer';
import { SIGNUP_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  userId: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGNUP_SUCCESS:
        draft.userId = action.id;
        draft.username = action.username;
        break;
    }
  });

export default loginReducer;
