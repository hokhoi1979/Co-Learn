import { call, put, takeLatest } from "redux-saga/effects";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import api from "../../config/apiConfig";
import { LOGIN__API, loginApiFail, loginApiSuccess } from "./loginSlice";

export function* fetchLogin(action) {
  try {
    const response = yield call(api.post, "/user/login", action.payload);
    if (response.status === 200 || response.status === 201) {
      const value = response.data.value;
      const token = value.token;
      localStorage.setItem("auth", JSON.stringify(value));
      if (token) {
        const decodedUser = jwtDecode(token);

        yield put(
          loginApiSuccess({
            user: value,
            token: decodedUser,
          })
        );
        toast.success("Login successful!");
      } else {
        yield put(loginApiFail(response.status));
        console.log(response.status);
      }
    }
  } catch (error) {
    const message =
      error?.response?.data?.message || "Login failed. Please try again.";
    yield put(loginApiFail(message));
    console.log("Login error:", message);
  }
}

function* watchFetchLogin() {
  yield takeLatest(LOGIN__API, fetchLogin);
}

export default watchFetchLogin;
