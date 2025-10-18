import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  GET__ENROLLMENT__STUDENT,
  getEnrollmentStudentFail,
  getEnrollmentStudentSuccess,
} from "./getEnrollmentStudentSlice";

export function* getEnrollmentStudentSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/enrollments/student/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getEnrollmentStudentSuccess(response.data));
    } else {
      yield put(getEnrollmentStudentFail(response.status));
    }
  } catch (error) {
    yield put(getEnrollmentStudentFail(error));
  }
}

function* watchGetEnrollmentStudent() {
  yield takeLatest(GET__ENROLLMENT__STUDENT, getEnrollmentStudentSaga);
}

export default watchGetEnrollmentStudent;
