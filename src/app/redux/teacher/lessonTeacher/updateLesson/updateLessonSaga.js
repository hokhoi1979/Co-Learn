import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import {
  UPDATE__LESSON,
  updateLessonFail,
  updateLessonSuccess,
} from "./updateLessonSlice";

export function* updateLessonSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.put, `/lessons/${id}`, body);
    if (response.status === 200 || response.status === 201) {
      yield put(updateLessonSuccess(response.data));
    } else {
      yield put(updateLessonFail(response.status));
    }
  } catch (error) {
    yield put(updateLessonFail(error));
    console.log(error);
  }
}

function* watchUpdateLesson() {
  yield takeLatest(UPDATE__LESSON, updateLessonSaga);
}

export default watchUpdateLesson;
