import { all } from "redux-saga/effects";
import watchFetchRegister from "./auth/registerSaga";
import watchFetchLogin from "./auth/loginSaga";

export default function* rootSaga() {
  yield all([watchFetchLogin(), watchFetchRegister()]);
}
