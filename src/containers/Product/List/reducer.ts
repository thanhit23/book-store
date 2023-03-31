import produce from 'immer';

import { GET_LIST_PRODUCT_SUCCESS } from './constants';
import { GET_PRODUCT_SUCCESS } from '../Detail/constants';

export const initialState = {
  detail: {},
  list: [],
};

interface Action {
  type: string;
  payload?: any;
}

const appReducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PRODUCT_SUCCESS:
        {
          const {
            payload: { data },
          } = action;
          draft.detail = data;
        }
        break;
      case GET_LIST_PRODUCT_SUCCESS:
        {
          const {
            payload: { data },
          } = action;
          draft.list = data;
        }
        break;
      default:
        break;
    }
  });

export default appReducer;
