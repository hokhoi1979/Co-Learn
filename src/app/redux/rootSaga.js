import { all } from "redux-saga/effects";
import watchFetchRegister from "./auth/registerSaga";
import watchFetchLogin from "./auth/loginSaga";
import watchGetAllParent from "./admin/user/getAllParent/getAllParentSaga";
import watchGetAllTeacher from "./admin/user/getAllTeacher/getAllTeacherSaga";

export default function* rootSaga() {
  yield all([
    watchFetchLogin(),
    watchFetchRegister(),
    watchGetAllParent(),
    watchGetAllTeacher(),
  ]);
}
