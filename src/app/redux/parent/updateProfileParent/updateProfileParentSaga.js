import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../config/apiConfig";
import {
  UPDATE__PROFILE__PARENT,
  updateProfileParentFail,
  updateProfileParentSuccess,
} from "./updateProfileParentSlice";
import { toast } from "react-toastify";
import { getProfileParentIdSuccess } from "../profileParentId/getProfileParentIdSlice";

export function* updateProfileParentSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.put, `/profile/parent/${id}`, body);
    if (response.status === 200 || response.status === 201) {
      yield put(updateProfileParentSuccess(response.data));
      toast.success("Update successful!");

      const fetch = yield call(api.get, `/profile/parent/${id}`);
      yield put(getProfileParentIdSuccess(fetch.data));
    } else {
      yield put(updateProfileParentFail(response.status));
    }
  } catch (error) {
    yield put(updateProfileParentFail(error));
    console.log(error);
  }
}

function* watchPutProfileParent() {
  yield takeLatest(UPDATE__PROFILE__PARENT, updateProfileParentSaga);
}

export default watchPutProfileParent;
