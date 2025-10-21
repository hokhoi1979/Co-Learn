import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  CREATE__MATERIALS,
  createMaterialsFail,
  createMaterialsSuccess,
} from "./createMaterialsSlice";
import { getMaterialsSuccess } from "../getMaterials/getMaterialsSlice";

export function* createMaterialsSaga(action) {
  try {
    const { lessonId, ...data } = action.payload;
    const response = yield call(
      api.post,
      `/lessons/${lessonId}/materials`,
      data
    );
    if (response.status === 200 || response.status === 201) {
      yield put(createMaterialsSuccess(response.data));
      toast.success("Create materials successful!");

      const fetch = yield call(api.get, `/lessons/${lessonId}/materials`);
      yield put(getMaterialsSuccess(fetch.data));
    } else {
      yield put(createMaterialsFail(response.status));
    }
  } catch (error) {
    yield put(createMaterialsFail(error));

    console.log(error);
  }
}

function* watchCreateMaterials() {
  yield takeLatest(CREATE__MATERIALS, createMaterialsSaga);
}

export default watchCreateMaterials;
