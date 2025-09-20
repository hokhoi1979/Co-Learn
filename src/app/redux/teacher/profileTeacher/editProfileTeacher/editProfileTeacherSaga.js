import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  EDIT__PROFILE__TEACHER,
  editProfileTeacherFail,
  editProfileTeacherSuccess,
} from "./editProfileTeacherSlice";

export function* editProfileTeacherSaga(action) {
  try {
    const { id, ...data } = action.payload;
    const response = yield call(api.put, `/profile/teacher/${id}`, data);
    if (response.status === 200 || response.status === 201) {
      yield put(editProfileTeacherSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(editProfileTeacherFail(response.status));
    }
  } catch (error) {
    yield put(editProfileTeacherFail(error));
    console.log(error);
  }
}

function* watchEditProfileTeacher() {
  yield takeLatest(EDIT__PROFILE__TEACHER, editProfileTeacherSaga);
}

export default watchEditProfileTeacher;
