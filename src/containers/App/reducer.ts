import produce from 'immer';

import { LOGIN_SUCCESS } from '../Login/constants';
import { IS_LOADING } from '../LoadingIndicator/constants';
import { TOAST_ERROR, RESET_MESSAGE } from '../ToastMessages/constants';
import { SET_AUTHENTICATION } from '../Authenticated/constants';
import { LOGOUT } from '../Header/constants';

export const initialState = {
  auth: null,
  loading: {
    showLoading: false,
  },
  toast: {
    type: '',
    message: null,
  },
};

interface Action {
  type: string;
  payload?: any;
}

const appReducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        {
          const {
            payload: { access, refresh, user },
          } = action;
          localStorage.setItem('token', access);
          localStorage.setItem('refresh', refresh);
          draft.auth = user;
        }
        break;
      case LOGOUT:
        {
          localStorage.removeItem('token');
          localStorage.removeItem('refresh');
          draft.auth = null;
        }
        break;
      case SET_AUTHENTICATION:
        {
          const {
            payload: { user },
          } = action;
          draft.auth = user;
        }
        break;
      case IS_LOADING:
        {
          const {
            payload: { loading },
          } = action;
          draft.loading.showLoading = loading;
        }
        break;
      case RESET_MESSAGE:
        draft.toast.message = null;
        break;
      default:
        {
          const text = action.type;
          if (text.includes('_FAILED')) {
            const {
              payload: { message },
            } = action;
            draft.toast.type = TOAST_ERROR;
            draft.toast.message = message;
          }
        }
        break;
    }
  });

export default appReducer;
