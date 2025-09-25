import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE__LESSON,
  createLessonFail,
  createLessonSuccess,
} from "./createLessonSlice";
import { toast } from "react-toastify";
import api from "../../../../config/apiConfig";
import { getLessonFail, getLessonSuccess } from "../getLesson/getLessonSlice";

export function* createLessonSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.post, `/courses/${id}/lessons`, body);
    if (response.status === 200 || response.status === 201) {
      yield put(createLessonSuccess(response.data));
      toast.success("Create lesson successful!");

      const fetch = yield call(api.get, `courses/${id}/lessons`);
      if (fetch.status === 200 || fetch.status === 201) {
        yield put(getLessonSuccess(fetch.data));
      } else {
        yield put(getLessonFail(fetch.status));
      }
    } else {
      yield put(createLessonFail(response.status));
    }
  } catch (error) {
    yield put(createLessonFail(error));
    console.log(error);
  }
}

function* watchCreateLesson() {
  yield takeLatest(CREATE__LESSON, createLessonSaga);
}

export default watchCreateLesson;
