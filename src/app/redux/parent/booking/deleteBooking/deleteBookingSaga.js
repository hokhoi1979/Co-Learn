import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  DELETE__BOOKING__ID,
  deleteBookingFail,
  deleteBookingSuccess,
} from "./deleteBookingSlice";

export function* deleteBookingSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.delete, `/bookings/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(deleteBookingSuccess(response.data));
      toast.success("Delete booking successful!");
    } else {
      yield put(deleteBookingFail(response.status));
    }
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Delete booking failed!";
    yield put(deleteBookingFail(message));
    toast.error(message);
    console.log(error);
  }
}

function* watchDeleteBooking() {
  yield takeLatest(DELETE__BOOKING__ID, deleteBookingSaga);
}

export default watchDeleteBooking;
