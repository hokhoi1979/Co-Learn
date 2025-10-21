import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  DELETE__LESSON,
  deleteLessonFail,
  deleteLessonSuccess,
} from "./deleteLessonSlice";

export function* deleteLessonSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.delete, `/lessons/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(deleteLessonSuccess(response.data));
      toast.success("Delete lesson successful!");
    } else {
      yield put(deleteLessonFail(response.status));
    }
  } catch (error) {
    yield put(deleteLessonFail(error));
    console.log(error);
  }
}

function* watchDeleteLesson() {
  yield takeLatest(DELETE__LESSON, deleteLessonSaga);
}

export default watchDeleteLesson;
