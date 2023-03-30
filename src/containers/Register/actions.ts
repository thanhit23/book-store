import { RegisterFailed, RegisterRequest, RegisterSuccess } from './types';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED } from './constants';

export const register = (data: object, callback: () => void): RegisterRequest => ({
  type: REGISTER_REQUEST,
  payload: { data, callback },
});

export const registerSuccess = (): RegisterSuccess => ({
  type: REGISTER_SUCCESS,
});

export const registerFailed = (message: string): RegisterFailed => ({
  type: REGISTER_FAILED,
  payload: { message },
});
