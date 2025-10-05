import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  GET__BOOKING__ID,
  getBookingIdFail,
  getBookingIdSuccess,
} from "./getBookingIdSlice";

export function* getBookingIdSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.post, `/bookings/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getBookingIdSuccess(response.data));
      console.log("Booking", response.data);
      toast.success("Booking successful!");
    } else {
      yield put(getBookingIdFail(response.status));
    }
  } catch (error) {
    yield put(getBookingIdFail(error));
    console.log(error);
  }
}

function* watchGetBookingId() {
  yield takeLatest(GET__BOOKING__ID, getBookingIdSaga);
}

export default watchGetBookingId;
