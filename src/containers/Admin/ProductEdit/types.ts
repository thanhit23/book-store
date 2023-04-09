import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_FAILED,
  GET_PRODUCT_DETAIL_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
} from './constants';

export interface State {
  admin: {
    product: {
      detail: object;
    };
  };
}

export interface Props {
  getProductDetail: (id: string) => void;
  updateProduct: (id: string, data: object, callback: () => void) => void;
  detail: {
    discount: number;
    images: string;
    name: string;
    price: number;
    description: string;
  };
}

export interface ResponseGenerator {
  data: {
    data: object;
    status: boolean;
    message: string;
  };
}

export interface GetProductDetail {
  type: typeof GET_PRODUCT_DETAIL_REQUEST;
  payload: { id: string };
}

export interface GetProductDetailSuccess {
  type: typeof GET_PRODUCT_DETAIL_SUCCESS;
  payload: { data: object };
}

export interface GetProductDetailFailed {
  type: typeof GET_PRODUCT_DETAIL_FAILED;
  payload: { message: string };
}

export interface UpdateProduct {
  type: typeof UPDATE_PRODUCT_REQUEST;
  payload: { id: string; data: object };
}

export interface UpdateProductSuccess {
  type: typeof UPDATE_PRODUCT_SUCCESS;
}

export interface UpdateProductFailed {
  type: typeof UPDATE_PRODUCT_FAILED;
  payload: { message: string };
}

export interface GetProductDetailAction {
  payload: { id: string };
  type: typeof GET_PRODUCT_DETAIL_REQUEST;
}

export interface UpdateProductAction {
  payload: { id: string; data: object; callback: () => void };
  type: typeof GET_PRODUCT_DETAIL_REQUEST;
}
