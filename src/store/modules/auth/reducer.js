import produce from 'immer';
import { SIGN_IN_SUCCESS } from './types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    default:
      return state;
  }
};

export default auth;
