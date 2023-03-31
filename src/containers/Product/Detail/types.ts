import { GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from './constants';

export interface Props {
  getProduct: (id: string | undefined) => void;
  detail: { name: string; price: number; discount: number; images: [string] };
}

export interface GetListProductAction {
  type: typeof GET_PRODUCT_REQUEST;
  payload: { id: string };
}

export interface GetListProductSuccessAction {
  type: typeof GET_PRODUCT_SUCCESS;
  payload: { data: [] };
}

export interface GetListProductFailedAction {
  type: typeof GET_PRODUCT_FAILED;
}

export interface ResponseGenerator {
  data: {
    data: [];
  };
  status: number;
}

export interface GetProductDetailType {
  type: typeof GET_PRODUCT_REQUEST;
  payload: { id: string };
}
