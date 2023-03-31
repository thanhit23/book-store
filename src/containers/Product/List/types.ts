import { GET_LIST_PRODUCT_FAILED, GET_LIST_PRODUCT_REQUEST, GET_LIST_PRODUCT_SUCCESS } from './constants';

export interface Props {
  getProduct: () => void;
  list: [];
}

export interface GetListProduct {
  type: typeof GET_LIST_PRODUCT_REQUEST;
}

export interface GetListProductSuccess {
  type: typeof GET_LIST_PRODUCT_SUCCESS;
  payload: { data: object };
}

export interface GetListProductFailed {
  type: typeof GET_LIST_PRODUCT_FAILED;
  payload: { messages: string };
}
