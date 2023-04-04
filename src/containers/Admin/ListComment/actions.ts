import {
  DELETE_COMMENT_ADMIN_REQUEST,
  GET_LIST_COMMENT_ADMIN_REQUEST,
  GET_LIST_COMMENT_ADMIN_FAILED,
  GET_LIST_COMMENT_ADMIN_SUCCESS,
  DELETE_COMMENT_ADMIN_FAILED,
  DELETE_COMMENT_ADMIN_SUCCESS,
} from './constants';
import {
  GetListCommentSuccess,
  DeleteCommentSuccess,
  DeleteCommentFailed,
  GetListCommentFailed,
  GetListComment,
  DeleteComment,
} from './types';

export const getListComment = () =>
  <GetListComment>{
    type: GET_LIST_COMMENT_ADMIN_REQUEST,
  };

export const getListCommentSuccess = (data: []) =>
  <GetListCommentSuccess>{
    type: GET_LIST_COMMENT_ADMIN_SUCCESS,
    payload: { data },
  };

export const getListCommentFailed = () =>
  <GetListCommentFailed>{
    type: GET_LIST_COMMENT_ADMIN_FAILED,
  };

export const deleteComment = (id: string) =>
  <DeleteComment>{
    type: DELETE_COMMENT_ADMIN_REQUEST,
    payload: { id },
  };

export const deleteCommentSuccess = () =>
  <DeleteCommentSuccess>{
    type: DELETE_COMMENT_ADMIN_SUCCESS,
  };

export const deleteCommentFailed = (message: string) =>
  <DeleteCommentFailed>{
    type: DELETE_COMMENT_ADMIN_FAILED,
    payload: { message },
  };
