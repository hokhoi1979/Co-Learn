import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  GET__TRANSACTION__ID,
  getTransactionByIdFail,
  getTransactionByIdSuccess,
} from "./getTransactionByIdSlice";

export function* getTransactionByIdSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/transaction/user/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getTransactionByIdSuccess(response.data));
    } else {
      yield put(getTransactionByIdFail(response.status));
    }
  } catch (error) {
    yield put(getTransactionByIdFail(error));
  }
}

function* watchGetTransactionById() {
  yield takeLatest(GET__TRANSACTION__ID, getTransactionByIdSaga);
}

export default watchGetTransactionById;
