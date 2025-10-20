import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  GET__SCHEDULE__STUDENT,
  getScheduleStudentFail,
  getScheduleStudentSuccess,
} from "./getScheduleSlice";

export function* getScheduleStudentSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/Schedule/student/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getScheduleStudentSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getScheduleStudentFail(response.status));
    }
  } catch (error) {
    yield put(getScheduleStudentFail(error));
  }
}

function* watchGetScheduleStudent() {
  yield takeLatest(GET__SCHEDULE__STUDENT, getScheduleStudentSaga);
}

export default watchGetScheduleStudent;
