import * as userTypes from './types';

export const updateProfileRequest = (data) => ({
  type: userTypes.UPDATE_PROFILE_REQUEST,
  payload: { data },
});

export const updateProfileSuccess = (profile) => ({
  type: userTypes.UPDATE_PROFILE_SUCCESS,
  payload: { profile },
});

export const updateProfileFailure = () => ({
  type: userTypes.UPDATE_PROFILE_FAILURE,
});
