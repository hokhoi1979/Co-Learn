import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  GET__PAYMENT__CANCEL,
  getPaymentCancelFail,
  getPaymentCancelSuccess,
} from "./getPaymentCancelSlice";

export function* getPaymentCancelSaga(action) {
  try {
    console.log(
      "IAOIAIOA",
      `/Payment/payos/cancel?orderCode=${action.payload}`
    );
    const response = yield call(
      api.get,
      `/Payment/payos/cancel?orderCode=${action.payload}`
    );

    if (response.status === 200 || response.status === 201) {
      yield put(getPaymentCancelSuccess(response.data));
    } else {
      yield put(getPaymentCancelFail(response.status));
      toast.error("Create failed!");
    }
  } catch (error) {
    yield put(getPaymentCancelFail(error));
  }
}

function* watchGetPaymentCancel() {
  yield takeLatest(GET__PAYMENT__CANCEL, getPaymentCancelSaga);
}

export default watchGetPaymentCancel;
