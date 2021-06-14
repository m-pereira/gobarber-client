import * as authTypes from './types';

export const signInRequest = (email, password) => ({
  type: authTypes.SIGN_IN_REQUEST,
  payload: { email, password },
});

export const signInSuccess = (token, user) => ({
  type: authTypes.SIGN_IN_SUCCESS,
  payload: { token, user },
});

export const signUpRequest = (name, email, password) => ({
  type: authTypes.SIGN_UP_REQUEST,
  payload: { name, email, password },
});

export const signFailure = () => ({
  type: authTypes.SIGN_FAILURE,
});

export const signOut = () => ({
  type: authTypes.SIGN_OUT,
});
