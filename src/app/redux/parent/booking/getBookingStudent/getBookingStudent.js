import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  GET__BOOKING__STUDENT,
  getBookingStudentFail,
  getBookingStudentSuccess,
} from "./getBookingStudentSlice";

export function* getBookingStudentSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/bookings/student/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getBookingStudentSuccess(response.data));
    } else {
      yield put(getBookingStudentFail(response.status));
    }
  } catch (error) {
    yield put(getBookingStudentFail(error));
    console.log(error);
  }
}

function* watchGetBookingStudent() {
  yield takeLatest(GET__BOOKING__STUDENT, getBookingStudentSaga);
}

export default watchGetBookingStudent;
