import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET__PROFILE__STUDENT__ID,
  getProfileStudentIdFail,
  getProfileStudentIdSuccess,
} from "./getProfileStudentSlice";
import api from "../../../config/apiConfig";

export function* getProfileStudentIdSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/profile/student/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getProfileStudentIdSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getProfileStudentIdFail(response.status));
    }
  } catch (error) {
    yield put(getProfileStudentIdFail(error));
  }
}

function* watchGetProfileStudentId() {
  yield takeLatest(GET__PROFILE__STUDENT__ID, getProfileStudentIdSaga);
}

export default watchGetProfileStudentId;
