import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  PUT__MEETING__SCHEDULE,
  putMeetingScheduleFail,
  putMeetingScheduleSuccess,
} from "./meetingScheduleSlice";
import { getScheduleTeacherSuccess } from "../scheduleTeacher/getScheduleTeacherSlice";
import { toast } from "react-toastify";

export function* putMeetingScheduleSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.put, `/Schedule/meeting/${id}`, body);
    if (response.status === 200 || response.status === 201) {
      yield put(putMeetingScheduleSuccess(response.data));
      console.log("DATA", response.data);
      toast.success("Update successful!");
      const fetch = yield call(api.get, `/Schedule/teacher/${id}`);
      yield put(getScheduleTeacherSuccess(fetch.data));
    } else {
      yield put(putMeetingScheduleFail(response.status));
    }
  } catch (error) {
    yield put(putMeetingScheduleFail(error));
  }
}

function* watchPutMeetingSchedule() {
  yield takeLatest(PUT__MEETING__SCHEDULE, putMeetingScheduleSaga);
}

export default watchPutMeetingSchedule;
