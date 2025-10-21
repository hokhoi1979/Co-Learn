import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  GET__PROFILE__TEACHER,
  getProfileTeacherFail,
  getProfileTeacherSuccess,
} from "./getProfileTeacherSlice";
export function* getProfileTeacherSaga() {
  try {
    const response = yield call(api.get, "/profile/teacher");
    if (response.status === 200 || response.status === 201) {
      yield put(getProfileTeacherSuccess(response.data));
    } else {
      yield put(getProfileTeacherFail(response.status));
    }
  } catch (error) {
    yield put(getProfileTeacherFail(error));
    console.log(error);
  }
}

function* watchGetProfileTeacher() {
  yield takeLatest(GET__PROFILE__TEACHER, getProfileTeacherSaga);
}

export default watchGetProfileTeacher;
