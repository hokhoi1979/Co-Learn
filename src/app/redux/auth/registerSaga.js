import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "../../config/apiConfig";
import {
  REGISTER__API,
  registerApiFail,
  registerApiSuccess,
} from "./registerSlice";

export function* fetchRegister(action) {
  try {
    const response = yield call(api.post, "/user", action.payload);
    console.log(response);
    if (response.status === 200 || response.status === 201) {
      yield put(registerApiSuccess(response.data));
    }

    toast.success("Register successful! Please login.");
  } catch (error) {
    yield put(registerApiFail(error.message));
    toast.error("Register failed!");
    console.error("Register saga error:", error);
  }
}

function* watchFetchRegister() {
  yield takeLatest(REGISTER__API, fetchRegister);
}

export default watchFetchRegister;
