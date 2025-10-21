import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  GET__PAYMENT,
  getPaymentFail,
  getPaymentSuccess,
} from "./getPaymentSlice";

export function* getPaymentSaga() {
  try {
    const response = yield call(api.get, `/Payment`);

    if (response.status === 200 || response.status === 201) {
      yield put(getPaymentSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getPaymentFail(response.status));
      toast.error("Create failed!");
    }
  } catch (error) {
    yield put(getPaymentFail(error));
  }
}

function* watchGetPayment() {
  yield takeLatest(GET__PAYMENT, getPaymentSaga);
}

export default watchGetPayment;
