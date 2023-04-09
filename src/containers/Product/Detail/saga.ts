import { call, put, takeLatest } from 'redux-saga/effects';

import { getProduct, addComment, getComments, editComment as editCommentService } from './service';
import { GET_PRODUCT_REQUEST, ADD_COMMENT_REQUEST, GET_LIST_COMMENT_REQUEST, EDIT_COMMENT_REQUEST } from './constants';
import {
  ResponseGenerator,
  GetProductDetailType,
  AddCommentProductType,
  GetListCommentType,
  EditCommentType,
} from './types';
import {
  getListProductFailed,
  getListProductSuccess,
  commentProductSuccess,
  commentProductFailed,
  getListCommentSuccess,
  getListCommentFailed,
  commentEditSuccess,
  commentEditFailed,
} from './actions';

function* getProductDetail({ payload: { id } }: GetProductDetailType) {
  const res: ResponseGenerator = yield call(getProduct, id);

  const {
    data: { status, data },
  } = res;

  if (status) {
    yield put(getListProductSuccess(data));
  } else {
    yield put(getListProductFailed());
  }
}

function* addCommentProduct({ payload: { data: dataComment, callback } }: AddCommentProductType) {
  const res: ResponseGenerator = yield call(addComment, dataComment);

  const {
    data: { status },
  } = res;

  if (status) {
    callback();
    yield put(commentProductSuccess('Add comment success'));
  } else {
    yield put(commentProductFailed());
  }
}

function* getListComment({ payload: { id } }: GetListCommentType) {
  const res: ResponseGenerator = yield call(getComments, id);

  const {
    data: { status, data },
  } = res;

  if (status) {
    yield put(getListCommentSuccess(data));
  } else {
    yield put(getListCommentFailed());
  }
}

function* editComment({ payload: { id, data, callback } }: EditCommentType) {
  const res: ResponseGenerator = yield call(editCommentService, id, data);

  const {
    data: { status, message },
  } = res;

  if (status) {
    callback();
    yield put(commentEditSuccess('Edit Successfully'));
  } else {
    yield put(commentEditFailed(message));
  }
}

export default function* productDetailSaga() {
  yield takeLatest(GET_PRODUCT_REQUEST, getProductDetail);
  yield takeLatest(ADD_COMMENT_REQUEST, addCommentProduct);
  yield takeLatest(GET_LIST_COMMENT_REQUEST, getListComment);
  yield takeLatest(EDIT_COMMENT_REQUEST, editComment);
}
