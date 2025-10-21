import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import {
  GET__COURSE__ID,
  getCourseByIdFail,
  getCourseByIdSuccess,
} from "./getCourseByIdSlice";

export function* getCourseByIdSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/Course/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getCourseByIdSuccess(response.data));
      console.log("RESPONES", response.data);
    } else {
      yield put(getCourseByIdFail(response.status));
    }
  } catch (error) {
    yield put(getCourseByIdFail(error));
    console.log(error);
  }
}

function* watchGetCourseById() {
  yield takeLatest(GET__COURSE__ID, getCourseByIdSaga);
}

export default watchGetCourseById;
