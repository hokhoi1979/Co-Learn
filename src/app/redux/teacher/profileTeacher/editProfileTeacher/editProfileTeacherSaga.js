import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  EDIT__PROFILE__TEACHER,
  editProfileTeacherFail,
  editProfileTeacherSuccess,
} from "./editProfileTeacherSlice";
import { toast } from "react-toastify";

export function* editProfileTeacherSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.put, `/profile/teacher/${id}`, body);
    if (response.status === 200 || response.status === 201) {
      yield put(editProfileTeacherSuccess(response.data));
      toast.success("Update successful!");
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
