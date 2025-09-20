import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET__PROFILE__STUDENT,
  getProfileStudentFail,
  getProfileStudentSuccess,
} from "./getProfileStudentSlice";
import api from "../../../config/apiConfig";

export function* getProfileStudentSaga() {
  try {
    const response = yield call(api.get, "/profile/student");
    if (response.status === 200 || response.status === 201) {
      yield put(getProfileStudentSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getProfileStudentFail(response.status));
    }
  } catch (error) {
    yield put(getProfileStudentFail(error));
    console.log(error);
  }
}

function* watchGetProfileStudent() {
  yield takeLatest(GET__PROFILE__STUDENT, getProfileStudentSaga);
}

export default watchGetProfileStudent;
