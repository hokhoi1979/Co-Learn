import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

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

      const fetch = yield call(api.get, `/bookings/${id}`);
      yield put(getBookingIdSuccess(fetch.data));
    } else {
      yield put(editBookingFail(response.status));
    }
  } catch (error) {
    yield put(editBookingFail(error.response?.data?.message || error.message));
    console.error("Edit booking failed:", error.response?.data || error);
  }
}

function* watchEditBooking() {
  yield takeLatest(EDIT__BOOKING__ID, editBookingSaga);
}

export default watchEditBooking;
