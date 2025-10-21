import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  GET__ALL__TEACHER,
  getAllTeacherFail,
  getAllTeacherSuccess,
} from "./getAllTeacherSlice";

export function* getAllTeacherSaga() {
  try {
    const response = yield call(api.get, "/profile/teacher");
    if (response.status === 200 || response.status === 201) {
      yield put(getAllTeacherSuccess(response.data));
      console.log("TEACHER", response.data);
    } else {
      yield put(getAllTeacherFail(response.status));
    }
  } catch (error) {
    yield put(getAllTeacherFail(error));
    console.log(error);
  }
}

function* watchGetAllTeacher() {
  yield takeLatest(GET__ALL__TEACHER, getAllTeacherSaga);
}

export default watchGetAllTeacher;
