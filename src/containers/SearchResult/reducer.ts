import produce from 'immer';

import { GET_PRODUCT_BY_KEYWORD_SUCCESS } from './constants';

export const initialState = {
  data: [],
};

interface Action {
  type: string;
  payload?: any;
}

const productSearch = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PRODUCT_BY_KEYWORD_SUCCESS:
        {
          const {
            payload: { data },
          } = action;
          draft.data = data;
        }
        break;
      default:
        break;
    }
  });

export default productSearch;
