import { AddProductRequest, AddProductSuccess, AddProductFailed } from './types';
import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILED } from './constants';

export const addProductRequest = (data: object, file: object) =>
  <AddProductRequest>{
    type: ADD_PRODUCT_REQUEST,
    payload: { data, file },
  };

export const addProductSuccess = () =>
  <AddProductSuccess>{
    type: ADD_PRODUCT_SUCCESS,
  };

export const addProductFailed = (message: string) =>
  <AddProductFailed>{
    type: ADD_PRODUCT_FAILED,
    payload: { message },
  };
