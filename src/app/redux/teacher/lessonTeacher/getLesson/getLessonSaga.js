import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import { GET__LESSON, getLessonFail, getLessonSuccess } from "./getLessonSlice";

export function* getLessonSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `courses/${id}/lessons`);
    if (response.status === 200 || response.status === 201) {
      yield put(getLessonSuccess(response.data));
      console.log("LESSON", response.data);
    } else {
      yield put(getLessonFail(response.status));
    }
  } catch (error) {
    yield put(getLessonFail(error));
    console.log(error);
  }
}

function* watchGetLesson() {
  yield takeLatest(GET__LESSON, getLessonSaga);
}

export default watchGetLesson;
