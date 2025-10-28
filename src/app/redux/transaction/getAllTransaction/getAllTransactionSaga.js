import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  GET__ALL__TRANSACTION,
  getAllTransactionFail,
  getAllTransactionSuccess,
} from "./getAllTransactionSlice";

export function* getAllTransactionSaga() {
  try {
    const response = yield call(api.get, `/transaction/get-all`);
    if (response.status === 200 || response.status === 201) {
      yield put(getAllTransactionSuccess(response.data));
      console.log("COURSE", response.data);
    } else {
      yield put(getAllTransactionFail(response.status));
    }
  } catch (error) {
    yield put(getAllTransactionFail(error));
  }
}

function* watchGetAllTransaction() {
  yield takeLatest(GET__ALL__TRANSACTION, getAllTransactionSaga);
}

export default watchGetAllTransaction;
