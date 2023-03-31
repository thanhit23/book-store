import { LOGOUT } from './constants';

export interface Props {
  auth: { admin: boolean };
  logout: () => void;
}

export interface LogoutType {
  type: typeof LOGOUT;
}
