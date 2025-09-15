import { call, put, takeLatest } from "redux-saga/effects";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import api from "../../config/apiConfig";
import {
  REGISTER__API,
  registerApiFail,
  registerApiSuccess,
} from "./registerSlice";

export function* fetchRegister(action) {
  try {
    const response = yield call(api.post, "/auth/register", action.payload);

    const { token } = response.data;

    if (token) {
      const decodedUser = jwtDecode(token);

      yield put(
        registerApiSuccess({
          user: decodedUser,
          token,
        })
      );

      toast.success("Register successful!");
      if (action.onSuccess) action.onSuccess(response);
    } else {
      toast.success("Register successful! Please login.");
      if (action.onSuccess) action.onSuccess(response);
    }
  } catch (error) {
    yield put(registerApiFail(error.message));
    toast.error("Register failed!");
    console.error(error);
  }
}

function* watchFetchRegister() {
  yield takeLatest(REGISTER__API, fetchRegister);
}

export default watchFetchRegister;
