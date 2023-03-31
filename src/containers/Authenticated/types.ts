import { NOT_AUTH } from './constants';
export interface Props {
  auth?: { admin: boolean };
  children: JSX.Element;
  onSendRequestToken: (token: string) => void;
  notToken: () => void;
}

export interface States {
  global: { auth: { admin: boolean } };
}

export interface PropsSendReqToken {
  type: string;
  payload: {
    token: string;
  };
}
export interface ApiResponse {
  data: object;
  status: number;
}

export interface NotAuth {
  type: typeof NOT_AUTH;
  payload: { callback: () => void };
}
