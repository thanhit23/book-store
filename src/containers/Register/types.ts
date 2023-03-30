import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS } from './constants';

export interface TypeAction {
  onSubmit: (data: object, callback: () => void) => void;
  loading: (loading: boolean) => void;
}

export interface ResponseGenerator {
  data: {
    message: string;
    status: number;
  };
}

export interface RegisterRequest {
  type: typeof REGISTER_REQUEST;
  payload: { data: object; callback: () => void };
}

export interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS;
}

export interface RegisterFailed {
  type: typeof REGISTER_FAILED;
  payload: { message: string };
}

export interface RegisterGenerator {
  type: string;
  payload: { data: object; callback: () => void };
}
