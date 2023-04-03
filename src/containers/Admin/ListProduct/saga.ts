import { call, put, takeLatest } from 'redux-saga/effects';
import { DELETE_PRODUCT_ADMIN_REQUEST, GET_LIST_PRODUCT_ADMIN_REQUEST } from './constants';
import { getListProduct as getListProductService, deleteProduct as deleteProductService } from './service';
import { getListProductSuccess, getListProductFailed, deleteProductSuccess, deleteProductFailed } from './actions';

export interface ResponseGenerator {
  data: {
    data: [];
    status: boolean;
    message: string;
  };
}

export interface Action {
  type: typeof DELETE_PRODUCT_ADMIN_REQUEST;
  payload: { id: string };
}

function* getListProduct() {
  const res: ResponseGenerator = yield call(getListProductService);
  const {
    data: { data, status, message },
  } = res;
  if (status) {
    yield put(getListProductSuccess(data));
  } else {
    yield put(getListProductFailed(message));
  }
}

function* deleteProduct({ payload: { id } }: Action) {
  const res: ResponseGenerator = yield call(deleteProductService, id);
  const {
    data: { status, message },
  } = res;
  if (status) {
    yield put({ type: GET_LIST_PRODUCT_ADMIN_REQUEST });
    yield put(deleteProductSuccess());
  } else {
    yield put(deleteProductFailed(message));
  }
}

export default function* listProductSaga() {
  yield takeLatest(GET_LIST_PRODUCT_ADMIN_REQUEST, getListProduct);
  yield takeLatest(DELETE_PRODUCT_ADMIN_REQUEST, deleteProduct);
}
