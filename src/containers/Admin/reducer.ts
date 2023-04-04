import produce from 'immer';
import { GET_LIST_PRODUCT_ADMIN_SUCCESS } from './ListProduct/constants';
import { GET_LIST_COMMENT_ADMIN_SUCCESS } from './ListComment/constants';

export const initialState = {
  product: {
    list: [],
  },
  comment: {
    list: [],
  },
};

interface Action {
  type: string;
  payload?: any;
}

const appReducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_LIST_PRODUCT_ADMIN_SUCCESS:
        {
          const {
            payload: { data },
          } = action;
          draft.product.list = data;
        }
        break;
      case GET_LIST_COMMENT_ADMIN_SUCCESS:
        {
          const {
            payload: { data },
          } = action;
          draft.comment.list = data;
        }
        break;
      default:
        break;
    }
  });

export default appReducer;
