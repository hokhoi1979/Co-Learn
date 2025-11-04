import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  GET__EARNING,
  getEarningFail,
  getEarningSuccess,
} from "./getEarningSlice";

export function* getEarningSaga() {
  try {
    const response = yield call(api.get, `/report/earning/teachers`);
    if (response.status === 200 || response.status === 201) {
      yield put(getEarningSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getEarningFail(response.status));
    }
  } catch (error) {
    yield put(getEarningFail(error));
  }
}

function* watchGetEarning() {
  yield takeLatest(GET__EARNING, getEarningSaga);
}

export default watchGetEarning;
