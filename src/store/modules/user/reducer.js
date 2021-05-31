import produce from 'immer';
import { SIGN_IN_SUCCESS } from '../auth/types';

const INITIAL_STATE = {
  profile: null,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return produce(state, (draft) => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
};

export default user;
