import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";
import {
  GET__BOOKING__TEACHER,
  getBookingTeacherFail,
  getBookingTeacherSuccess,
} from "./getBookingTeacherSlice";

export function* getBookingTeacherSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/bookings/teacher/${id}`);
    if (response.status === 200 || response.status === 201) {
      yield put(getBookingTeacherSuccess(response.data));
    } else {
      yield put(getBookingTeacherFail(response.status));
    }
  } catch (error) {
    yield put(getBookingTeacherFail(error));
    console.log(error);
  }
}

function* watchGetBookingTeacher() {
  yield takeLatest(GET__BOOKING__TEACHER, getBookingTeacherSaga);
}

export default watchGetBookingTeacher;
