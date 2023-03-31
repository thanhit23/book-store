import { NotAuth } from './types';
import { SET_AUTHENTICATION } from './constants';
import { CHECK_TOKEN_REQUEST, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FAILED, REDIRECT_LOGIN, NOT_AUTH } from './constants';

export const sendRequestToken = (token: string) => ({
  type: CHECK_TOKEN_REQUEST,
  payload: {
    token,
  },
});

export const redirectLogin = () => ({
  type: REDIRECT_LOGIN,
});

export const notAuth = (callback: () => void): NotAuth => ({
  type: NOT_AUTH,
  payload: {
    callback,
  },
});

export const setAuth = (user: object) => ({
  type: SET_AUTHENTICATION,
  payload: {
    user,
  },
});

export const checkTokenSuccess = () => ({
  type: CHECK_TOKEN_SUCCESS,
});

export const checkTokenFailed = () => ({
  type: CHECK_TOKEN_FAILED,
});
