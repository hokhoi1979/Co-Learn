import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  GET__EARNING_ID,
  getEarningIdFail,
  getEarningIdSuccess,
} from "./getEarningByIdSlice";

export function* getEarningIdSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/report/earning/teachers/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getEarningIdSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getEarningIdFail(response.status));
    }
  } catch (error) {
    yield put(getEarningIdFail(error));
  }
}

function* watchGetEarningId() {
  yield takeLatest(GET__EARNING_ID, getEarningIdSaga);
}

export default watchGetEarningId;
