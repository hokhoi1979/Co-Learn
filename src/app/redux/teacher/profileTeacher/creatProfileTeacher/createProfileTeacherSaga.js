import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  CREATE__PROFILE__TEACHER,
  createProfileTeacherFail,
  createProfileTeacherSuccess,
} from "./createProfileTeacherSlice";

export function* createProfileTeacherSaga(action) {
  try {
    const body = action.payload;
    const response = yield call(api.post, `/profile/teacher`, body);
    if (response.status === 200 || response.status === 201) {
      yield put(createProfileTeacherSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(createProfileTeacherFail(response.status));
    }
  } catch (error) {
    yield put(createProfileTeacherFail(error));
    console.log(error);
  }
}

function* watchCreateProfileTeacher() {
  yield takeLatest(CREATE__PROFILE__TEACHER, createProfileTeacherSaga);
}

export default watchCreateProfileTeacher;
