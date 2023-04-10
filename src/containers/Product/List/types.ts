import { GET_LIST_PRODUCT_FAILED, GET_LIST_PRODUCT_REQUEST, GET_LIST_PRODUCT_SUCCESS } from './constants';

export interface Props {
  getProduct: (page: number) => void;
  list: [];
  metaData: {
    totalPage: number;
    page: number;
  };
}

export interface State {
  product: {
    list: { data: []; metaData: object };
  };
  global: {
    loading: { showLoading: boolean };
  };
}

export interface GetListProduct {
  type: typeof GET_LIST_PRODUCT_REQUEST;
  payload: { page: number };
}

export interface GetListProductSuccess {
  type: typeof GET_LIST_PRODUCT_SUCCESS;
  payload: { data: object };
}

export interface GetListProductFailed {
  type: typeof GET_LIST_PRODUCT_FAILED;
  payload: { messages: string };
}

export interface Action {
  type: typeof GET_LIST_PRODUCT_REQUEST;
  payload: { page: number };
}

export interface ResponseGenerator {
  status: boolean;
  data: {
    data: {
      data: [];
      page: number;
      limit: number;
      totalPage: number;
    };
    message: string;
  };
}
