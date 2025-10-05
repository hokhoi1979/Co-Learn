import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET__PROFILE__PARENT__ID,
  getProfileParentIdFail,
  getProfileParentIdSuccess,
} from "./getProfileParentIdSlice";
import api from "../../../config/apiConfig";

export function* getProfileParentIdSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/profile/parent/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getProfileParentIdSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getProfileParentIdFail(response.status));
    }
  } catch (error) {
    yield put(getProfileParentIdFail(error));
    console.log(error);
  }
}

function* watchGetProfileParentId() {
  yield takeLatest(GET__PROFILE__PARENT__ID, getProfileParentIdSaga);
}

export default watchGetProfileParentId;
