import * as UserTypes from './types';

export const updateProfileRequest = (data) => ({
  type: UserTypes.UPDATE_PROFILE_REQUEST,
  payload: { data },
});

export const updateProfileSuccess = (profile) => ({
  type: UserTypes.UPDATE_PROFILE_SUCCESS,
  payload: { profile },
});

export const updateProfileFailure = () => ({
  type: UserTypes.UPDATE_PROFILE_FAILURE,
});
