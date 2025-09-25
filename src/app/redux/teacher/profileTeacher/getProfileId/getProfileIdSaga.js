import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  GET__PROFILE__TEACHER__ID,
  getProfileTeacherIdFail,
  getProfileTeacherIdSuccess,
} from "./getProfileIdSlice";

export function* getProfileTeacherIdSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/profile/teacher/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getProfileTeacherIdSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getProfileTeacherIdFail(response.status));
    }
  } catch (error) {
    yield put(getProfileTeacherIdFail(error));
    console.log(error);
  }
}

function* watchGetProfileTeacherId() {
  yield takeLatest(GET__PROFILE__TEACHER__ID, getProfileTeacherIdSaga);
}

export default watchGetProfileTeacherId;
