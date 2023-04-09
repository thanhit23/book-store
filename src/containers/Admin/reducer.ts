import produce from 'immer';
import { GET_PRODUCT_DETAIL_SUCCESS } from './ProductEdit/constants';
import { GET_LIST_PRODUCT_ADMIN_SUCCESS } from './ListProduct/constants';
import { GET_LIST_COMMENT_ADMIN_SUCCESS } from './ListComment/constants';

export const initialState = {
  product: {
    list: {
      data: [],
      metaData: {},
    },
    detail: {},
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
            payload: {
              data: { data, limit, page, totalPage },
            },
          } = action;
          draft.product.list.data = data;
          draft.product.list.metaData = { limit, page, totalPage };
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
      case GET_PRODUCT_DETAIL_SUCCESS:
        {
          const {
            payload: { data },
          } = action;
          draft.product.detail = data;
        }
        break;
      default:
        break;
    }
  });

export default appReducer;
