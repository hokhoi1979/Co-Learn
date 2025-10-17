import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  POST__PAYMENT__COURSE,
  postPaymentCourseFail,
  postPaymentCourseSuccess,
} from "./postPaymentCourseSlice";

export function* postPaymentCourseSaga(action) {
  try {
    const { courseId, userId, studentId } = action.payload;
    const response = yield call(
      api.post,
      `/Payment/payos/course/${courseId}/student/${studentId}/user/${userId}`
    );

    if (response.status === 200 || response.status === 201) {
      yield put(postPaymentCourseSuccess(response.data));
    } else {
      yield put(postPaymentCourseFail(response.status));
      toast.error("Create failed!");
    }
  } catch (error) {
    console.error(" postPaymentCourseSaga error:", error);
    yield put(postPaymentCourseFail(error));
  }
}

function* watchPostPaymentCourse() {
  yield takeLatest(POST__PAYMENT__COURSE, postPaymentCourseSaga);
}

export default watchPostPaymentCourse;
