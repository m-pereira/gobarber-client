import * as actionTypes from './types';

export const signInRequest = (email, password) => ({
  type: actionTypes.SIGN_IN_REQUEST,
  payload: { email, password },
});

export const signInSuccess = (token, user) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: { token, user },
});

export const signFailure = () => ({
  type: actionTypes.SIGN_FAILURE,
});
