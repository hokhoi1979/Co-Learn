import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

export function* getAllParentSaga() {
  try {
    const response = yield call(api.get, "/profile/parent");
    if (response.status === 200 || response.status === 201) {
      yield put(getAllParentSuccess(response.data));
      console.log("DATA", response.data);
    } else {
      yield put(getAllParentFail(response.status));
    }
  } catch (error) {
    yield put(getAllParentFail(error));
    console.log(error);
  }
}

function* watchGetAllParent() {
  yield takeLatest(GET__ALL__PARENT, getAllParentSaga);
}

export default watchGetAllParent;
