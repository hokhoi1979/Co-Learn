import { call, put, takeLatest } from "redux-saga/effects";
import {
  EDIT__PROFILE__TEACHER,
  editProfileTeacherFail,
  editProfileTeacherSuccess,
} from "./editProfileTeacherSlice";
import { toast } from "react-toastify";
import api from "../../../../config/apiConfig";
import { getAllTeacher } from "../../../admin/user/getAllTeacher/getAllTeacherSlice";

export function* editProfileTeacherSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.put, `/profile/teacher/${id}`, body);

    console.log(response);
    if (response.status === 200 || response.status === 201) {
      yield put(editProfileTeacherSuccess(response.data));
      toast.success("Update successful!");

      // const fetch = yield call(api.get, `/profile/teacher/${id}`);
      // yield put(getProfileTeacherIdSuccess(fetch.data));
      yield put(getAllTeacher());
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
