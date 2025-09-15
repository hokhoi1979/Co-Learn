import { call, put, takeLatest } from "redux-saga/effects";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import api from "../../config/apiConfig";
import { LOGIN__API, loginApiFail, loginApiSuccess } from "./loginSlice";

export function* fetchLogin(action) {
  try {
    const response = yield call(api.post("/auth/login", action.payload));
    const { token } = response.data;
    if (token) {
      const decodedUser = jwtDecode(token);

      yield put(
        loginApiSuccess({
          user: decodedUser,
          token: token,
        })
      );
      console.log("USER", decodedUser);
      console.log("TOKEN", token);
      toast.success("Login successful!");

      if (action.onSuccess) action.onSuccess(response);
    } else {
      throw new Error("Email or password is not correct! Try again");
    }
  } catch (error) {
    yield put(loginApiFail(error));
    console.log(error);
  }
}

function* watchFetchLogin() {
  yield takeLatest(LOGIN__API, fetchLogin);
}

export default watchFetchLogin;
