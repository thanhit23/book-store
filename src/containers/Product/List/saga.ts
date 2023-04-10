import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_LIST_PRODUCT_REQUEST } from './constants';
import { getListProduct as getListProductService } from './service';
import { getListProductSuccess, getListProductFailed } from './actions';
import { Action, ResponseGenerator } from './types';

function* getListProduct({ payload: { page } }: Action) {
  const res: ResponseGenerator = yield call(getListProductService, page);

  const { status, data } = res;
  if (status) {
    const {
      data: { data: dataRes, page, limit, totalPage },
    } = data;
    yield put(getListProductSuccess(dataRes, { page, limit, totalPage }));
  } else {
    const { message } = data;
    yield put(getListProductFailed(message));
  }
}

export default function* listProduct() {
  yield takeLatest(GET_LIST_PRODUCT_REQUEST, getListProduct);
}
