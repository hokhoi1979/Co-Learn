import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./auth/loginSlice";
import registerReducer from "./auth/registerSlice";
import getAllParentReducer from "./admin/user/getAllParent/getAllParentSlice";
import getAllTeacherReducer from "./admin/user/getAllTeacher/getAllTeacherSlice";
const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  getAllParent: getAllParentReducer,
  getAllTeacher: getAllTeacherReducer,
});

export default rootReducer;
