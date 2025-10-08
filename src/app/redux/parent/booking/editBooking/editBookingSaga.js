import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import { toast } from "react-toastify";

import {
  EDIT__BOOKING__ID,
  editBookingFail,
  editBookingSuccess,
} from "./editBookingSlice";
import { getBookingIdSuccess } from "../getBookingId/getBookingIdSlice";

export function* editBookingSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.put, `/bookings/${id}`, body);
    if (response.status === 200 || response.status === 201) {
      yield put(editBookingSuccess(response.data));
      toast.success("Update successful!");
      const fetch = yield call(api.get, `/bookings/${id}`);
      yield put(getBookingIdSuccess(fetch.data));
    } else {
      yield put(editBookingFail(response.status));
      toast.error("Update fail!");
    }
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Delete booking failed!";
    yield put(editBookingFail(message));
    toast.error(message);
    console.log(error);
  }
}

function* watchEditBooking() {
  yield takeLatest(EDIT__BOOKING__ID, editBookingSaga);
}

export default watchEditBooking;
