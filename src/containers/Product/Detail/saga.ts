import { call, put, takeLatest } from 'redux-saga/effects';

import { getProduct, addComment, getComments } from './service';
import { GET_PRODUCT_REQUEST, ADD_COMMENT_REQUEST, GET_LIST_COMMENT_REQUEST } from './constants';
import { ResponseGenerator, GetProductDetailType, AddCommentProductType, GetListCommentType } from './types';
import {
  getListProductFailed,
  getListProductSuccess,
  commentProductSuccess,
  commentProductFailed,
  getListCommentSuccess,
  getListCommentFailed,
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

export default function* productDetailSaga() {
  yield takeLatest(GET_PRODUCT_REQUEST, getProductDetail);
  yield takeLatest(ADD_COMMENT_REQUEST, addCommentProduct);
  yield takeLatest(GET_LIST_COMMENT_REQUEST, getListComment);
}
