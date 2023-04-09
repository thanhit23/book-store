import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_FAILED,
  GET_PRODUCT_DETAIL_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
} from './constants';
import {
  GetProductDetail,
  GetProductDetailFailed,
  GetProductDetailSuccess,
  UpdateProductSuccess,
  UpdateProductFailed,
  UpdateProduct,
} from './types';

export const getProductDetail = (id: string) => <GetProductDetail>{ type: GET_PRODUCT_DETAIL_REQUEST, payload: { id } };

export const getProductDetailSuccess = (data: object) =>
  <GetProductDetailSuccess>{
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload: { data },
  };

export const getProductDetailFailed = (message: string) =>
  <GetProductDetailFailed>{
    type: GET_PRODUCT_DETAIL_FAILED,
    payload: { message },
  };

export const updateProduct = (id: string, data: object, callback: () => void) =>
  <UpdateProduct>{ type: UPDATE_PRODUCT_REQUEST, payload: { id, data, callback } };

export const updateProductSuccess = () =>
  <UpdateProductSuccess>{
    type: UPDATE_PRODUCT_SUCCESS,
  };

export const updateProductFailed = (message: string) =>
  <UpdateProductFailed>{
    type: UPDATE_PRODUCT_FAILED,
    payload: { message },
  };
