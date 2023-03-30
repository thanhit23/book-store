import { RESET_MESSAGE } from './constants';
import { ResetMessageAction } from './types';

export const resetMessage = (): ResetMessageAction => ({
  type: RESET_MESSAGE,
});
