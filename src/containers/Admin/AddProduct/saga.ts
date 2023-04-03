import { takeLatest, call, put } from 'redux-saga/effects';

import { ADD_PRODUCT_REQUEST } from './constants';
import { addProductSuccess, addProductFailed } from './actions';
import { addProduct as addProductService, uploadFile } from './service';
import { AddProductRequest, ResponseGenerator, ResponseGeneratorUpload } from './types';

function* addProduct(data: object, files: [], callback: () => void) {
  const res: ResponseGenerator = yield call(addProductService, { ...data, images: files });
  const { status, data: dataRes } = res;
  if (status) {
    callback();
    yield put(addProductSuccess());
  } else {
    const { message } = dataRes;
    yield put(addProductFailed(message));
  }
}

function* handleAddProduct({ payload: { data, callback } }: AddProductRequest) {
  const { file } = data;
  const res: ResponseGeneratorUpload = yield call(uploadFile, file);
  const {
    status,
    data: { data: files },
  } = res;
  if (status) {
    yield addProduct(data, files, callback);
  }
}

export default function* addProductSaga() {
  yield takeLatest(ADD_PRODUCT_REQUEST, handleAddProduct);
}
