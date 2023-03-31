import { GetListProduct, GetListProductFailed, GetListProductSuccess } from './types';
import { GET_LIST_PRODUCT_FAILED, GET_LIST_PRODUCT_REQUEST, GET_LIST_PRODUCT_SUCCESS } from './constants';

export const getListProduct = () =>
  <GetListProduct>{
    type: GET_LIST_PRODUCT_REQUEST,
  };

export const getListProductSuccess = (data: []) =>
  <GetListProductSuccess>{
    type: GET_LIST_PRODUCT_SUCCESS,
    payload: { data },
  };

export const getListProductFailed = (messages: string) =>
  <GetListProductFailed>{
    type: GET_LIST_PRODUCT_FAILED,
    payload: { messages },
  };
