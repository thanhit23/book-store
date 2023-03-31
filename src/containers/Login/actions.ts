import { loginAction } from './types';
import { LOGIN_REQUEST, LOGIN_FAILED, LOGIN_SUCCESS } from './constants';

export const login = ({ email, password, callback }: loginAction) => ({
  type: LOGIN_REQUEST,
  payload: { email, password, callback },
});

export const loginSuccess = (access: string, refresh: string, user: object) => ({
  type: LOGIN_SUCCESS,
  payload: { access, refresh, user },
});

export const loginFailed = (data: object) => ({
  type: LOGIN_FAILED,
  payload: { data },
});
