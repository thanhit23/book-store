import { GetListProduct, GetListProductFailed, GetListProductSuccess } from './types';
import { GET_LIST_PRODUCT_FAILED, GET_LIST_PRODUCT_REQUEST, GET_LIST_PRODUCT_SUCCESS } from './constants';

export const getListProduct = (page: number) =>
  <GetListProduct>{
    type: GET_LIST_PRODUCT_REQUEST,
    payload: { page },
  };

export const getListProductSuccess = (data: [], meta: { page: number; limit: number; totalPage: number }) =>
  <GetListProductSuccess>{
    type: GET_LIST_PRODUCT_SUCCESS,
    payload: { data, meta },
  };

export const getListProductFailed = (messages: string) =>
  <GetListProductFailed>{
    type: GET_LIST_PRODUCT_FAILED,
    payload: { messages },
  };
