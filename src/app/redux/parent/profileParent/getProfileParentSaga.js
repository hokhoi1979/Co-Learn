import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  GET__PROFILE__PARENT,
  getProfileParentFail,
  getProfileParentSuccess,
} from "./getProfileParentSlice";

export function* getProfileParentSaga() {
  try {
    const response = yield call(api.get, "/profile/parent");
    if (response.status === 200 || response.status === 201) {
      yield put(getProfileParentSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getProfileParentFail(response.status));
    }
  } catch (error) {
    yield put(getProfileParentFail(error));
    console.log(error);
  }
}

function* watchGetProfileParent() {
  yield takeLatest(GET__PROFILE__PARENT, getProfileParentSaga);
}

export default watchGetProfileParent;
