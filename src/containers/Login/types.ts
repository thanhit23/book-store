import { LOGIN_REQUEST } from './constants';

export interface loginAction {
  email: string;
  password: string;
  callback: () => void;
}

export interface FetchLoginType {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
    callback: () => void;
  };
}

export interface ResponseGenerator {
  data: {
    data: {
      tokens: { access: string; refresh: string };
      user: object;
    };
  };
  status: number;
}

export interface login {
  onLogin: (data: object) => void;
  loading: (loading: boolean) => void;
}

export interface formType {
  email?: string;
  password?: string;
}
