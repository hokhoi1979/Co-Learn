import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  DELETE__COURSE,
  deleteCourseFail,
  deleteCourseSuccess,
} from "./deleteCourseSlice";
import { getCourseFail, getCourseSuccess } from "../getCourse/getCourseSlice";
import { toast } from "react-toastify";

export function* deleteCourseSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.delete, `/Course/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(deleteCourseSuccess({ message: "Delete successful!" }));
      const fetch = yield call(api.get, `/Course`);
      if (fetch.status === 200 || fetch.status === 201) {
        yield put(getCourseSuccess(fetch.data));
      } else {
        yield put(getCourseFail(fetch.status));
      }
    } else {
      yield put(deleteCourseFail(response.status));
      toast.fail("Delete course fail!");
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchDeleteCourse() {
  yield takeLatest(DELETE__COURSE, deleteCourseSaga);
}

export default watchDeleteCourse;
