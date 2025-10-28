import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../config/apiConfig";
import { BAN__USER, banUserFail, banUserSuccess } from "./banUserSlice";
import { getAllUserSuccess } from "../user/getAllUser/getAllUserSlice";
import { toast } from "react-toastify";

export function* banUserSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.delete, `/user/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(banUserSuccess(response.data));

      const fetch = yield call(api.get, "/user?pageIndex=1&pageSize=1000");
      yield put(getAllUserSuccess(fetch.data));

      toast.success("Update status successful!");
    } else {
      yield put(banUserFail(response.status));
    }
  } catch (error) {
    yield put(banUserFail(error));
    console.log(error);
  }
}

function* watchBanUser() {
  yield takeLatest(BAN__USER, banUserSaga);
}

export default watchBanUser;
