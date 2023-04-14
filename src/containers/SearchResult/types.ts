import { GET_PRODUCT_BY_KEYWORD_REQUEST } from './constants';

export interface SearchResultProps {
  data: [];
  getProduct: (slug: string) => void;
}

export interface RegisterGenerator {
  type: typeof GET_PRODUCT_BY_KEYWORD_REQUEST;
  payload: { keyword: string };
}

export interface State {
  productSearch: {
    data: [];
    metaData: object;
  };
}

export interface ResponseGenerator {
  data: {
    data: [];
    message: string;
    status: number;
  };
}
