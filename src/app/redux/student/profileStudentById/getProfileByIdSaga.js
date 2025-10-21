import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET__PROFILE__STUDENT__ID,
  getProfileStudentByIdFail,
  getProfileStudentByIdSuccess,
} from "./getProfileByIdSlice";
import api from "../../../config/apiConfig";

export function* getProfileStudentByIdSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/profile/student/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getProfileStudentByIdSuccess(response.data));
    } else {
      yield put(getProfileStudentByIdFail(response.status));
    }
  } catch (error) {
    yield put(getProfileStudentByIdFail(error));
    console.log(error);
  }
}

function* watchProfileStudentById() {
  yield takeLatest(GET__PROFILE__STUDENT__ID, getProfileStudentByIdSaga);
}

export default watchProfileStudentById;
