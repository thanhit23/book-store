import { LOGOUT } from './constants';
import { LogoutType } from './types';

export const Logout = () =>
  <LogoutType>{
    type: LOGOUT,
  };
