import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  GET__SCHEDULE__TEACHER,
  getScheduleTeacherFail,
  getScheduleTeacherSuccess,
} from "./getScheduleTeacherSlice";

export function* getScheduleTeacherSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/Schedule/teacher/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getScheduleTeacherSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getScheduleTeacherFail(response.status));
    }
  } catch (error) {
    yield put(getScheduleTeacherFail(error));
  }
}

function* watchGetScheduleTeacher() {
  yield takeLatest(GET__SCHEDULE__TEACHER, getScheduleTeacherSaga);
}

export default watchGetScheduleTeacher;
