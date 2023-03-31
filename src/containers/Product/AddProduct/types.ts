import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_FAILED, ADD_PRODUCT_SUCCESS } from './constants';

export interface PropsAddProduct {
  onSubmit: (data: SubmitDataType) => void;
}

export interface HandleSubmitType {
  file: object;
  discount: number;
  price: number;
  name: string;
}

export interface SubmitDataType {
  file: object;
  discount: number;
  price: number;
  name: string;
}

export interface AddProductRequest {
  type: typeof ADD_PRODUCT_REQUEST;
  payload: {
    data: {
      file: object;
      discount: number;
      price: number;
      name: string;
    };
  };
}

export interface AddProductSuccess {
  type: typeof ADD_PRODUCT_SUCCESS;
}

export interface AddProductFailed {
  type: typeof ADD_PRODUCT_FAILED;
  payload: { message: string };
}

export interface ResponseGeneratorUpload {
  data: [];
  status: boolean;
}

export interface ResponseGenerator {
  data: {
    message: string;
  };
  status: boolean;
}
