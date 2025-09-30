import { call, put, takeLatest } from "redux-saga/effects";
import { GET__USERID, getUserIdFail, getUserIdSuccess } from "./getUserIDSlice";
import api from "../../../config/apiConfig";

export function* getUserIDSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/user/${id}`);
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    ) {
      yield put(getUserIdSuccess(response.data));
      console.log("USER", response.data);
    } else {
      yield put(getUserIdFail(response.status));
    }
  } catch (error) {
    console.log(error);
    yield put(getUserIdFail(error));
  }
}

export function* watchGetUserId() {
  yield takeLatest(GET__USERID, getUserIDSaga);
}

export default watchGetUserId;
