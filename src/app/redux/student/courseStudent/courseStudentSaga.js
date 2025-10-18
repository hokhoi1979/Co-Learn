import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  GET__COURSE__STUDENT,
  getCourseStudentFail,
  getCourseStudentSuccess,
} from "./courseStudentSlice";

export function* getCourseStudentSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/enrollments/course/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getCourseStudentSuccess(response.data));
      console.log("COURSE", response.data);
    } else {
      yield put(getCourseStudentFail(response.status));
    }
  } catch (error) {
    yield put(getCourseStudentFail(error));
  }
}

function* watchGetCourseStudent() {
  yield takeLatest(GET__COURSE__STUDENT, getCourseStudentSaga);
}

export default watchGetCourseStudent;
