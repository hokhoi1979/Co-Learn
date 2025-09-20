import { all } from "redux-saga/effects";
import watchFetchRegister from "./auth/registerSaga";
import watchFetchLogin from "./auth/loginSaga";
import watchGetAllParent from "./admin/user/getAllParent/getAllParentSaga";
import watchGetAllTeacher from "./admin/user/getAllTeacher/getAllTeacherSaga";
import watchGetProfileTeacher from "./teacher/profileTeacher/getProfileTeacher/getProfileTeacherSaga";
import watchGetProfileStudent from "./parent/profileStudent/getProfileStudentSaga";
import watchEditProfileTeacher from "./teacher/profileTeacher/editProfileTeacher/editProfileTeacherSaga";

export default function* rootSaga() {
  yield all([
    watchFetchLogin(),
    watchFetchRegister(),
    //Parent
    watchGetAllParent(),

    //Teacher
    watchGetAllTeacher(),
    watchGetProfileTeacher(),
    watchEditProfileTeacher(),

    //Student
    watchGetProfileStudent(),
  ]);
}
