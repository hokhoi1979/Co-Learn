import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  PUT__PROFILE__STUDENT,
  putProfileStudentFail,
  putProfileStudentSuccess,
} from "./putProfileStudentSlice";

import { toast } from "react-toastify";

export function* putProfileStudentSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.put, `profile/student/${id}`, body);
    if (response.status === 200 || response.status === 201) {
      yield put(putProfileStudentSuccess(response.data));
      console.log("DATA", response.data);
      toast.success("Update successful!");
    } else {
      yield put(putProfileStudentFail(response.status));
    }
  } catch (error) {
    yield put(putProfileStudentFail(error));
    console.log(error);
  }
}

function* watchPutProfileStudent() {
  yield takeLatest(PUT__PROFILE__STUDENT, putProfileStudentSaga);
}

export default watchPutProfileStudent;
