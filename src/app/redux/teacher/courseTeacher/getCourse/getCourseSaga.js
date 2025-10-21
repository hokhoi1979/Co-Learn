import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import { GET__COURSE, getCourseFail, getCourseSuccess } from "./getCourseSlice";

export function* getCourseSaga() {
  try {
    const response = yield call(api.get, `/Course?pageIndex=1&pageSize=100`);
    if (response.status === 200 || response.status === 201) {
      yield put(getCourseSuccess(response.data));
    } else {
      yield put(getCourseFail(response.status));
    }
  } catch (error) {
    yield put(getCourseFail(error));
  }
}

function* watchGetCourse() {
  yield takeLatest(GET__COURSE, getCourseSaga);
}

export default watchGetCourse;
