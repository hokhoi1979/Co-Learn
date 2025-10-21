import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../config/apiConfig";
import {
  POST__PROFILE__STUDENT,
  postProfileStudentFail,
  postProfileStudentSuccess,
} from "./postProfileStudentSlice";
import { toast } from "react-toastify";
import { getProfileParentId } from "../profileParentId/getProfileParentIdSlice";

export function* postProfileStudentSaga(action) {
  try {
    const body = action.payload;

    const response = yield call(api.post, "/profile/student", body);

    if (response.status === 200 || response.status === 201) {
      yield put(postProfileStudentSuccess(response.data));
      console.log(" Created student profile:", response.data);
      toast.success("Create successful!");

      if (body.parentUserId) {
        yield put(getProfileParentId(body.parentUserId));
      }
    } else {
      yield put(postProfileStudentFail(response.status));
      toast.error("Create failed!");
    }
  } catch (error) {
    console.error(" postProfileStudentSaga error:", error);
    yield put(postProfileStudentFail(error));
  }
}

function* watchPostProfileStudent() {
  yield takeLatest(POST__PROFILE__STUDENT, postProfileStudentSaga);
}

export default watchPostProfileStudent;
