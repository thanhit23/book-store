import { takeLatest, call, put } from 'redux-saga/effects';

import { DeleteCommentAction, ResponseGenerator } from './types';
import { GET_LIST_COMMENT_ADMIN_REQUEST, DELETE_COMMENT_ADMIN_REQUEST } from './constants';
import { getListComment as getListCommentService, deleteComment as deleteCommentAction } from './service';
import { getListCommentSuccess, getListCommentFailed, deleteCommentSuccess, deleteCommentFailed } from './actions';

function* getListComment() {
  const res: ResponseGenerator = yield call(getListCommentService);

  const {
    data: { status, data },
  } = res;

  if (status) {
    yield put(getListCommentSuccess(data));
  } else {
    yield put(getListCommentFailed());
  }
}

function* deleteComment({ payload: { id } }: DeleteCommentAction) {
  const res: ResponseGenerator = yield call(deleteCommentAction, id);

  const {
    data: { status, message },
  } = res;

  if (status) {
    yield put(deleteCommentSuccess());
    yield put({ type: GET_LIST_COMMENT_ADMIN_REQUEST });
  } else {
    yield put(deleteCommentFailed(message));
  }
}

export default function* listCommentSaga() {
  yield takeLatest(GET_LIST_COMMENT_ADMIN_REQUEST, getListComment);
  yield takeLatest(DELETE_COMMENT_ADMIN_REQUEST, deleteComment);
}
