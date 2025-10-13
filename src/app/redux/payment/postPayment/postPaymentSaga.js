import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  POST__PAYMENT,
  postPaymentFail,
  postPaymentSuccess,
} from "./postPaymentSlice";

export function* postPaymentSaga(action) {
  try {
    const body = action.payload;

    const response = yield call(api.post, "/Payment", body);

    if (response.status === 200 || response.status === 201) {
      yield put(postPaymentSuccess(response.data));
      console.log("Dâta", response.data);
    } else {
      yield put(postPaymentFail(response.status));
      toast.error("Create failed!");
    }
  } catch (error) {
    console.error(" postPaymentSaga error:", error);
    yield put(postPaymentFail(error));
  }
}

function* watchPostPaymentStudent() {
  yield takeLatest(POST__PAYMENT, postPaymentSaga);
}

export default watchPostPaymentStudent;
