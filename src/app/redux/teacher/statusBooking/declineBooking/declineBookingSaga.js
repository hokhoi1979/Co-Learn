import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  DECLINE__BOOKING__TEACHER,
  declineBookingTeacherFail,
  declineBookingTeacherSuccess,
} from "./declineBookingSlice";

export function* declineBookingTeacherSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.post, `/bookings/${id}/decline`);
    if (response.status === 200 || response.status === 201) {
      yield put(declineBookingTeacherSuccess(response.data));
      toast.success("decline booking successful!");
    } else {
      yield put(declineBookingTeacherFail(response.status));
    }
  } catch (error) {
    yield put(declineBookingTeacherFail(error));
    console.log(error);
  }
}

function* watchDeclineBookingTeacher() {
  yield takeLatest(DECLINE__BOOKING__TEACHER, declineBookingTeacherSaga);
}

export default watchDeclineBookingTeacher;
