import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  GET__COURSE__TEACHER,
  getCourseTeacherFail,
  getCourseTeacherSuccess,
} from "./getCourseTeacherSlice";

export function* getCourseTeacherSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/Course/${id}/get-all`);
    if (response.status === 200 || response.status === 201) {
      yield put(getCourseTeacherSuccess(response.data));
    } else {
      yield put(getCourseTeacherFail(response.status));
    }
  } catch (error) {
    yield put(getCourseTeacherFail(error));
    console.log(error);
  }
}

function* watchGetCourseTeacher() {
  yield takeLatest(GET__COURSE__TEACHER, getCourseTeacherSaga);
}

export default watchGetCourseTeacher;
