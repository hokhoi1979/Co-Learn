import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  GET__ENROLLMENT,
  getEnrollmentFail,
  getEnrollmentSuccess,
} from "./getEnrollmentSlice";

export function* getEnrollmentSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/enrollments/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getEnrollmentSuccess(response.data));
    } else {
      yield put(getEnrollmentFail(response.status));
    }
  } catch (error) {
    yield put(getEnrollmentFail(error));
  }
}

function* watchGetEnrollment() {
  yield takeLatest(GET__ENROLLMENT, getEnrollmentSaga);
}

export default watchGetEnrollment;
