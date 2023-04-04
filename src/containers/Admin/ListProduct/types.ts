import {
  DELETE_PRODUCT_ADMIN_FAILED,
  DELETE_PRODUCT_ADMIN_REQUEST,
  DELETE_PRODUCT_ADMIN_SUCCESS,
  GET_LIST_PRODUCT_ADMIN_FAILED,
  GET_LIST_PRODUCT_ADMIN_REQUEST,
  GET_LIST_PRODUCT_ADMIN_SUCCESS,
} from './constants';

export interface Props {
  getListProduct: () => void;
  list: [];
  deleteProduct: (id: string) => void;
}

export interface State {
  admin: {
    product: {
      list: [];
    };
  };
}

export interface GetListProduct {
  type: typeof GET_LIST_PRODUCT_ADMIN_REQUEST;
}

export interface GetListProductSuccess {
  type: typeof GET_LIST_PRODUCT_ADMIN_SUCCESS;
  payload: { data: [] };
}

export interface GetListProductFailed {
  type: typeof GET_LIST_PRODUCT_ADMIN_FAILED;
  payload: { message: string };
}

export interface DeleteProduct {
  type: typeof DELETE_PRODUCT_ADMIN_REQUEST;
  payload: { id: string };
}

export interface DeleteProductSuccess {
  type: typeof DELETE_PRODUCT_ADMIN_SUCCESS;
}

export interface DeleteProductFailed {
  type: typeof DELETE_PRODUCT_ADMIN_FAILED;
  payload: { message: string };
}

export interface ResponseGenerator {
  data: {
    data: [];
    status: boolean;
    message: string;
  };
}

export interface Action {
  type: typeof DELETE_PRODUCT_ADMIN_REQUEST;
  payload: { id: string };
}
