import { RESET_MESSAGE } from './constants';

export interface ResetMessageAction {
  type: typeof RESET_MESSAGE;
}

export interface ToastAction {
  toast: { message: string; type: string };
  resetMessage: () => void;
}

export interface State {
  global: { toast: { message: string; type: string } };
}
