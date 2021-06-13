import produce from 'immer';
import { SIGN_IN_SUCCESS } from '../auth/types';
import { UPDATE_PROFILE_SUCCESS } from './types';

const INITIAL_STATE = {
  profile: null,
};

const user = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }
      case UPDATE_PROFILE_SUCCESS: {
        draft.profile = action.payload.profile;
        break;
      }
      default:
    }
  });

export default user;
