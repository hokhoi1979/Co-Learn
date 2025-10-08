import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  UPDATE__COURSE,
  updateCourseFail,
  updateCourseSuccess,
} from "./updateCourseSlice";
import { toast } from "react-toastify";
import { getCourseTeacherSuccess } from "../getCourseTeacher/getCourseTeacherSlice";

export function* updateCourseSaga(action) {
  try {
    const { idTeacher, id, body } = action.payload;
    const response = yield call(api.put, `/Course/${id}`, body);
    if (response.status === 200 || response.status === 201) {
      yield put(updateCourseSuccess(response.data));
      toast.success("Update successful!");
      console.log("UPDATE", response.data);

      const fetch = yield call(api.get, `/Course/${idTeacher}/get-all`);
      yield put(getCourseTeacherSuccess(fetch.data));
    } else {
      yield put(updateCourseFail(response.status));
    }
  } catch (error) {
    yield put(updateCourseFail(error));
    console.log(error);
  }
}

function* watchUpdateCourse() {
  yield takeLatest(UPDATE__COURSE, updateCourseSaga);
}

export default watchUpdateCourse;
