import { call, put, takeLatest } from "redux-saga/effects";
import {
  APPROVE__COURSE,
  approveCourseFail,
  approveCourseSuccess,
} from "./approveCourseSlice";
import api from "../../../config/apiConfig";
import { toast } from "react-toastify";

export function* approveCourseSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.put, `/Course/${id}/active`);
    if (response.status === 200 || response.status === 201) {
      yield put(approveCourseSuccess(response.data));
      toast.success("Approve successful!");
    } else {
      yield put(approveCourseFail(response.status));
    }
  } catch (error) {
    yield put(approveCourseFail(error));
    console.log(error);
  }
}

function* watchApproveCourse() {
  yield takeLatest(APPROVE__COURSE, approveCourseSaga);
}

export default watchApproveCourse;
