import {
  GET_PRODUCT_BY_KEYWORD_REQUEST,
  GET_PRODUCT_BY_KEYWORD_SUCCESS,
  GET_PRODUCT_BY_KEYWORD_FAILED,
} from './constants';

export const getProduct = (keyword: string) =>
  <{ type: typeof GET_PRODUCT_BY_KEYWORD_REQUEST; payload: { keyword: string } }>{
    type: GET_PRODUCT_BY_KEYWORD_REQUEST,
    payload: { keyword },
  };

export const getProductSuccess = (data: []) =>
  <{ type: typeof GET_PRODUCT_BY_KEYWORD_SUCCESS; payload: { data: [] } }>{
    type: GET_PRODUCT_BY_KEYWORD_SUCCESS,
    payload: { data },
  };

export const getProductFailed = (message: string) =>
  <{ type: typeof GET_PRODUCT_BY_KEYWORD_FAILED; payload: { message: string } }>{
    type: GET_PRODUCT_BY_KEYWORD_FAILED,
    payload: { message },
  };
