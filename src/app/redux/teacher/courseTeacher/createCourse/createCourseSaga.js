import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  CREATE__COURSE,
  createCourseFail,
  createCourseSuccess,
} from "./createCourseSlice";
import { getCourseFail, getCourseSuccess } from "../getCourse/getCourseSlice";
import { toast } from "react-toastify";

export function* createCourseSaga(action) {
  try {
    const response = yield call(api.post, `/Course`, action.payload);
    if (response.status === 200 || response.status === 201) {
      yield put(createCourseSuccess(response.data));

      const fetch = yield call(api.get, `/Course`);
      if (fetch.status === 200 || fetch.status === 201) {
        yield put(getCourseSuccess(fetch.data));
        console.log("DATA", fetch.data);
        toast.success("Create course successful!");
      } else {
        yield put(getCourseFail(fetch.status));
      }
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
