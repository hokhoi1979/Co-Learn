import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  GET__ALL__USER,
  getAllUserFail,
  getAllUserSuccess,
} from "./getAllUserSlice";

export function* getAllUserSaga() {
  try {
    const response = yield call(api.get, "/user?pageIndex=1&pageSize=1000");
    if (response.status === 200 || response.status === 201) {
      yield put(getAllUserSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getAllUserFail(response.status));
    }
  } catch (error) {
    yield put(getAllUserFail(error));
    console.log(error);
  }
}

function* watchGetAllUser() {
  yield takeLatest(GET__ALL__USER, getAllUserSaga);
}

export default watchGetAllUser;
