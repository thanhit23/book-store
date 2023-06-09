import produce from 'immer';

import { LOGOUT } from '../Header/constants';
import { LOGIN_SUCCESS } from '../Login/constants';
import { IS_LOADING } from '../LoadingIndicator/constants';
import { SET_AUTHENTICATION } from '../Authenticated/constants';
import { TOAST_ERROR, RESET_MESSAGE, TOAST_SUCCESS } from '../ToastMessages/constants';
import { ADD_COMMENT_SUCCESS } from '../Product/Detail/constants';

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
      case ADD_COMMENT_SUCCESS:
        {
          const {
            payload: { message },
          } = action;
          draft.toast.message = message;
          draft.loading.showLoading = false;
          draft.toast.type = TOAST_SUCCESS;
        }
        break;
      default:
        {
          const text = action.type;
          draft.loading.showLoading = text.includes('_REQUEST');
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
