import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./auth/loginSlice";
import registerReducer from "./auth/registerSlice";
const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
});

export default rootReducer;
