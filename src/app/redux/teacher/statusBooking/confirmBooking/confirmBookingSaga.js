import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  CONFIRM__BOOKING__TEACHER,
  confirmBookingTeacherFail,
  confirmBookingTeacherSuccess,
} from "./confirmBookingSlice";
import { toast } from "react-toastify";

export function* confirmBookingTeacherSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.post, `/bookings/${id}/confirm`);
    if (response.status === 200 || response.status === 201) {
      yield put(confirmBookingTeacherSuccess(response.data));
      console.log("DATA", response.data);
      toast.success("Confirm booking successful!");
    } else {
      yield put(confirmBookingTeacherFail(response.status));
      toast.error("Confirm fail!");
    }
  } catch (error) {
    console.log("🔥 ERROR RESPONSE:", error.response);

    const message =
      typeof error?.response?.data === "string"
        ? error.response.data
        : error?.response?.data?.message ||
          error?.response?.data?.error ||
          error.message ||
          "Đã xảy ra lỗi, vui lòng thử lại.";

    yield put(confirmBookingTeacherFail(message));
    toast.error(` ${message}`);
  }
}

function* watchConfirmBookingTeacher() {
  yield takeLatest(CONFIRM__BOOKING__TEACHER, confirmBookingTeacherSaga);
}

export default watchConfirmBookingTeacher;
