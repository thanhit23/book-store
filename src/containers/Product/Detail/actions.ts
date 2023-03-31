import { GET_PRODUCT_REQUEST, GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESS } from './constants';
import { GetListProductAction, GetListProductFailedAction, GetListProductSuccessAction } from './types';

export const getListProduct = (id: string) =>
  <GetListProductAction>{
    type: GET_PRODUCT_REQUEST,
    payload: { id },
  };

export const getListProductSuccess = (data: []) =>
  <GetListProductSuccessAction>{
    type: GET_PRODUCT_SUCCESS,
    payload: { data },
  };

export const getListProductFailed = () =>
  <GetListProductFailedAction>{
    type: GET_PRODUCT_FAILED,
  };
