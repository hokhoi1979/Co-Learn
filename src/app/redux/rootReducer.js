import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./auth/loginSlice";
import registerReducer from "./auth/registerSlice";
import getAllParentReducer from "./admin/user/getAllParent/getAllParentSlice";
import getAllTeacherReducer from "./admin/user/getAllTeacher/getAllTeacherSlice";
import getProfileTeacherReducer from "./teacher/profileTeacher/getProfileTeacher/getProfileTeacherSlice";
import editProfileTeacherReducer from "./teacher/profileTeacher/editProfileTeacher/editProfileTeacherSlice";
import getProfileStudentReducer from "./parent/profileStudent/getProfileStudentSlice";
const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  //Parent
  getAllParent: getAllParentReducer,

  //Teacher
  getAllTeacher: getAllTeacherReducer,
  getProfileTeacher: getProfileTeacherReducer,
  editProfileTeacher: editProfileTeacherReducer,

  //Student
  getProfileStudent: getProfileStudentReducer,
});

export default rootReducer;
