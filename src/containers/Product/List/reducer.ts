import produce from 'immer';

import { GET_LIST_PRODUCT_SUCCESS } from './constants';
import { GET_LIST_COMMENT_SUCCESS, GET_PRODUCT_SUCCESS } from '../Detail/constants';

export const initialState = {
  detail: {},
  list: {
    data: [],
    metaData: {},
  },
  comment: [],
};

interface Action {
  type: string;
  payload?: any;
}

const product = (state = initialState, action: Action) =>
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
            payload: { data, meta },
          } = action;
          draft.list.data = data;
          draft.list.metaData = meta;
        }
        break;
      case GET_LIST_COMMENT_SUCCESS:
        {
          const {
            payload: { data },
          } = action;
          draft.comment = data;
        }
        break;
      default:
        break;
    }
  });

export default product;
