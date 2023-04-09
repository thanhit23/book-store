import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_PRODUCT_DETAIL_REQUEST, UPDATE_PRODUCT_REQUEST } from './constants';
import { getProductDetail as getProductDetailService, updateProduct as updateProductService } from './service';
import { getProductDetailSuccess, getProductDetailFailed, updateProductSuccess, updateProductFailed } from './actions';
import { GetProductDetailAction, ResponseGenerator, UpdateProductAction } from './types';

function* getProductDetail({ payload: { id } }: GetProductDetailAction) {
  const res: ResponseGenerator = yield call(getProductDetailService, id);

  const {
    data: { data, status, message },
  } = res;
  if (status) {
    yield put(getProductDetailSuccess(data));
  } else {
    yield put(getProductDetailFailed(message));
  }
}

function* updateProduct({ payload: { id, data, callback } }: UpdateProductAction) {
  const res: ResponseGenerator = yield call(updateProductService, id, data);

  const {
    data: { status, message },
  } = res;

  if (status) {
    callback();
    yield put(updateProductSuccess());
  } else {
    yield put(updateProductFailed(message));
  }
}

export default function* AdminEditProduct() {
  yield takeLatest(GET_PRODUCT_DETAIL_REQUEST, getProductDetail);
  yield takeLatest(UPDATE_PRODUCT_REQUEST, updateProduct);
}
