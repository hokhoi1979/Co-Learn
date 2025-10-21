import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  DELETE__COURSE,
  deleteCourseFail,
  deleteCourseSuccess,
} from "./deleteCourseSlice";
import { toast } from "react-toastify";
import { getCourseTeacherSuccess } from "../getCourseTeacher/getCourseTeacherSlice";

export function* deleteCourseSaga(action) {
  try {
    const { id, idTeacher } = action.payload;
    const response = yield call(api.delete, `/Course/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(deleteCourseSuccess({ message: "Delete successful!" }));
      toast.success("Delete course successful!");

      const fetch = yield call(api.get, `/Course/${idTeacher}/get-all`);
      yield put(getCourseTeacherSuccess(fetch.data));
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
