import {
  DELETE_COMMENT_ADMIN_FAILED,
  DELETE_COMMENT_ADMIN_REQUEST,
  DELETE_COMMENT_ADMIN_SUCCESS,
  GET_LIST_COMMENT_ADMIN_FAILED,
  GET_LIST_COMMENT_ADMIN_REQUEST,
  GET_LIST_COMMENT_ADMIN_SUCCESS,
} from './constants';

export interface GetListComment {
  type: typeof GET_LIST_COMMENT_ADMIN_REQUEST;
}

export interface GetListCommentSuccess {
  type: typeof GET_LIST_COMMENT_ADMIN_SUCCESS;
  payload: { data: [] };
}

export interface GetListCommentFailed {
  type: typeof GET_LIST_COMMENT_ADMIN_FAILED;
}

export interface DeleteComment {
  type: typeof DELETE_COMMENT_ADMIN_REQUEST;
}

export interface DeleteCommentSuccess {
  type: typeof DELETE_COMMENT_ADMIN_SUCCESS;
}

export interface DeleteCommentFailed {
  type: typeof DELETE_COMMENT_ADMIN_FAILED;
  payload: { message: string };
}

export interface State {
  admin: {
    comment: {
      list: [];
    };
  };
}

export interface Props {
  list: [];
  getListComment: () => void;
  deleteComment: (id: string) => void;
}

export interface ResponseGenerator {
  data: {
    data: [];
    status: boolean;
    message: string;
  };
}

export interface DeleteCommentAction {
  payload: { id: string };
  type: typeof DELETE_COMMENT_ADMIN_REQUEST;
}
