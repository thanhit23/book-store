import {
  DELETE_PRODUCT_ADMIN_FAILED,
  DELETE_PRODUCT_ADMIN_REQUEST,
  DELETE_PRODUCT_ADMIN_SUCCESS,
  GET_LIST_PRODUCT_ADMIN_FAILED,
  GET_LIST_PRODUCT_ADMIN_REQUEST,
  GET_LIST_PRODUCT_ADMIN_SUCCESS,
} from './constants';
import {
  DeleteProductFailed,
  DeleteProductSuccess,
  GetListProductFailed,
  GetListProductSuccess,
  GetListProduct,
  DeleteProduct,
} from './types';

export const getListProduct = () =>
  <GetListProduct>{
    type: GET_LIST_PRODUCT_ADMIN_REQUEST,
  };

export const getListProductSuccess = (data: []) =>
  <GetListProductSuccess>{
    type: GET_LIST_PRODUCT_ADMIN_SUCCESS,
    payload: { data },
  };

export const getListProductFailed = (message: string) =>
  <GetListProductFailed>{
    type: GET_LIST_PRODUCT_ADMIN_FAILED,
    payload: { message },
  };

export const deleteProduct = (id: string) =>
  <DeleteProduct>{
    type: DELETE_PRODUCT_ADMIN_REQUEST,
    payload: { id },
  };

export const deleteProductSuccess = () =>
  <DeleteProductSuccess>{
    type: DELETE_PRODUCT_ADMIN_SUCCESS,
  };

export const deleteProductFailed = (message: string) =>
  <DeleteProductFailed>{
    type: DELETE_PRODUCT_ADMIN_FAILED,
    payload: { message },
  };
