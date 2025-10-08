import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  CREATE__COURSE,
  createCourseFail,
  createCourseSuccess,
} from "./createCourseSlice";
import { toast } from "react-toastify";
import { getCourseTeacherSuccess } from "../getCourseTeacher/getCourseTeacherSlice";

export function* createCourseSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.post, `/Course`, body);
    if (response.status === 200 || response.status === 201) {
      yield put(createCourseSuccess(response.data));
      toast.success("Create course successful!");

      const fetch = yield call(api.get, `/Course/${id}/get-all`);
      yield put(getCourseTeacherSuccess(fetch.data));
    } else {
      yield put(response.status);
    }
  } catch (error) {
    yield put(createCourseFail(error));
    console.log(error);
  }
}
function* watchCreateCourse() {
  yield takeLatest(CREATE__COURSE, createCourseSaga);
}

export default watchCreateCourse;
