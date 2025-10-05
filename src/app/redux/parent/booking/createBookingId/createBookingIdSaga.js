import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  CREATE__BOOKING__ID,
  createBookingIdFail,
  createBookingIdSuccess,
} from "./createBookingIdSlice";
import { toast } from "react-toastify";

export function* createBookingIdSaga(action) {
  try {
    const response = yield call(api.post, "/bookings", action.payload);
    if (response.status === 200 || response.status === 201) {
      yield put(createBookingIdSuccess(response.data));
      console.log("Booking", response.data);
      toast.success("Booking successful!");
    } else {
      yield put(createBookingIdFail(response.status));
    }
  } catch (error) {
    yield put(createBookingIdFail(error));
    console.log(error);
  }
}

function* watchCreateBookingId() {
  yield takeLatest(CREATE__BOOKING__ID, createBookingIdSaga);
}

export default watchCreateBookingId;
