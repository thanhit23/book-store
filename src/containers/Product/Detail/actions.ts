import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_SUCCESS,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILED,
  GET_LIST_COMMENT_REQUEST,
  GET_LIST_COMMENT_SUCCESS,
  GET_LIST_COMMENT_FAILED,
  EDIT_COMMENT_FAILED,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_REQUEST,
} from './constants';
import {
  CommentProductAction,
  CommentProductFailedAction,
  CommentProductSuccessAction,
  GetListProductAction,
  GetListProductFailedAction,
  GetListProductSuccessAction,
  GetListCommentRequest,
  GetListCommentSuccess,
  GetListCommentFailed,
  CommentEditAction,
  CommentEditSuccessAction,
  CommentEditFailedAction,
} from './types';

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

export const commentProduct = (data: object, callback: () => void) =>
  <CommentProductAction>{
    type: ADD_COMMENT_REQUEST,
    payload: { data, callback },
  };

export const commentProductSuccess = (message: string) =>
  <CommentProductSuccessAction>{
    type: ADD_COMMENT_SUCCESS,
    payload: { message },
  };

export const commentProductFailed = () =>
  <CommentProductFailedAction>{
    type: ADD_COMMENT_FAILED,
  };

export const commentEdit = (id: string, data: object, callback: () => void) =>
  <CommentEditAction>{
    type: EDIT_COMMENT_REQUEST,
    payload: { id, data, callback },
  };

export const commentEditSuccess = (message: string) =>
  <CommentEditSuccessAction>{
    type: EDIT_COMMENT_SUCCESS,
    payload: { message },
  };

export const commentEditFailed = (message: string) =>
  <CommentEditFailedAction>{
    type: EDIT_COMMENT_FAILED,
    payload: { message },
  };

export const getListComment = (id: string) =>
  <GetListCommentRequest>{
    type: GET_LIST_COMMENT_REQUEST,
    payload: { id },
  };

export const getListCommentSuccess = (data: []) =>
  <GetListCommentSuccess>{
    type: GET_LIST_COMMENT_SUCCESS,
    payload: { data },
  };

export const getListCommentFailed = () =>
  <GetListCommentFailed>{
    type: GET_LIST_COMMENT_FAILED,
  };
