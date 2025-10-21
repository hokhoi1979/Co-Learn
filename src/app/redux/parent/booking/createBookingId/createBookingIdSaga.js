import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  CREATE__BOOKING__ID,
  createBookingIdFail,
  createBookingIdSuccess,
} from "./createBookingIdSlice";
import { toast } from "react-toastify";
import { getBookingStudentSuccess } from "../getBookingStudent/getBookingStudentSlice";

export function* createBookingIdSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.post, "/bookings", body);
    if (response.status === 200 || response.status === 201) {
      yield put(createBookingIdSuccess(response.data));
      console.log("Booking", response.data);
      toast.success("Booking successful!");

      const fetch = yield call(api.get, `/bookings/student/${id}`);
      yield put(getBookingStudentSuccess(fetch.data));
    } else {
      yield put(createBookingIdFail(response.status));
      toast.error("Booking error!");
    }
  } catch (error) {
    yield put(createBookingIdFail(error));
    toast.fail("Booking fail!");
    console.log(error);
  }
}

function* watchCreateBookingId() {
  yield takeLatest(CREATE__BOOKING__ID, createBookingIdSaga);
}

export default watchCreateBookingId;
