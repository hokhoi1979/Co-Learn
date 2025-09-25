import { call } from "redux-saga/effects";
import api from "../../../config/apiConfig";

export function* getUserIDSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get(`/user/${id}`));
  } catch (error) {}
}
