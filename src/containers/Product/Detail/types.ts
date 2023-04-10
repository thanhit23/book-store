import {
  GET_PRODUCT_FAILED,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILED,
  GET_LIST_COMMENT_REQUEST,
  GET_LIST_COMMENT_SUCCESS,
  GET_LIST_COMMENT_FAILED,
  EDIT_COMMENT_REQUEST,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILED,
} from './constants';
import { Nullable } from '../../../common/types';

export interface Props {
  getProduct: (id: string) => void;
  detail: { name: string; price: number; discount: number; images: [string]; description: string };
  auth: Nullable<{ _id: string }>;
  comment: [];
  commentProduct: (data: object, callback: () => void) => void;
  editComment: (id: string, data: object, callback: () => void) => void;
  getListComment: (id: string | undefined) => void;
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

export interface CommentProductAction {
  type: typeof ADD_COMMENT_REQUEST;
  payload: { data: object; callback: () => void };
}

export interface CommentProductSuccessAction {
  type: typeof ADD_COMMENT_SUCCESS;
  payload: { message: string };
}

export interface CommentProductFailedAction {
  type: typeof ADD_COMMENT_FAILED;
}

export interface CommentEditAction {
  type: typeof EDIT_COMMENT_REQUEST;
  payload: { id: string; data: object; callback: () => void };
}

export interface CommentEditSuccessAction {
  type: typeof EDIT_COMMENT_SUCCESS;
  payload: { message: string };
}

export interface CommentEditFailedAction {
  type: typeof EDIT_COMMENT_FAILED;
}

export interface GetListCommentRequest {
  type: typeof GET_LIST_COMMENT_REQUEST;
  payload: { id: string };
}

export interface GetListCommentSuccess {
  type: typeof GET_LIST_COMMENT_SUCCESS;
  payload: { data: [] };
}

export interface GetListCommentFailed {
  type: typeof GET_LIST_COMMENT_FAILED;
}

export interface ResponseGenerator {
  data: {
    data: [];
    status: boolean;
    message: string;
  };
  status: number;
}

export interface AddCommentProductType {
  type: typeof ADD_COMMENT_REQUEST;
  payload: { data: object; callback: () => void };
}

export interface GetProductDetailType {
  type: typeof GET_PRODUCT_REQUEST;
  payload: { id: string };
}

export interface EditCommentType {
  type: typeof EDIT_COMMENT_REQUEST;
  payload: { id: string; data: object; callback: () => void };
}

export interface GetListCommentType {
  type: typeof GET_LIST_COMMENT_REQUEST;
  payload: { id: string };
}
