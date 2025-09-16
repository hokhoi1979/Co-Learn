import { call, put, takeLatest } from "redux-saga/effects";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import api from "../../config/apiConfig";
import { LOGIN__API, loginApiFail, loginApiSuccess } from "./loginSlice";

export function* fetchLogin(action) {
  try {
    const response = yield call(api.post, "/user/login", action.payload);
    console.log(response.data);
    if (response.status === 200 || response.status === 201) {
      const token = response.data.token;
      if (token) {
        const decodedUser = jwtDecode(token);

        yield put(
          loginApiSuccess({
            user: decodedUser,
            token: token,
          })
        );
        toast.success("Login successful!");
        console.log("USER", decodedUser);
        console.log("TOKEN", token);
      } else {
        yield put(loginApiFail(response.status));
        console.log(response.status);
      }
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
