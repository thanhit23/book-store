import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_FAILED, ADD_PRODUCT_SUCCESS } from './constants';

export interface PropsAddProduct {
  onSubmit: (data: SubmitDataType, callback: () => void) => void;
}

export interface PropsAddProductComponent {
  onSubmit: (data: SubmitDataType) => void;
}

export interface HandleSubmitType {
  file: object;
  discount: number;
  price: number;
  name: string;
  description: string;
}

export interface SubmitDataType {
  file: object;
  discount: number;
  price: number;
  name: string;
  description: string;
}

export interface AddProductRequest {
  type: typeof ADD_PRODUCT_REQUEST;
  payload: {
    data: {
      file: object;
      discount: number;
      price: number;
      name: string;
      description: string;
    };
    callback: () => void;
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
  data: { data: [] };
  status: boolean;
}

export interface ResponseGenerator {
  data: {
    message: string;
  };
  status: boolean;
}
