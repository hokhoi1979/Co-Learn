import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  UPDATE__MATERIALS,
  updateMaterialsFail,
  updateMaterialsSuccess,
} from "./updateMaterialsSlice";

export function* updateMaterialsSaga(action) {
  try {
    const { id, body } = action.payload;
    const response = yield call(api.put, `/materials/${id}`, body);
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    ) {
      yield put(updateMaterialsSuccess(response.data));
      toast.success("Update successful!");
    } else {
      yield put(updateMaterialsFail(response.status));
    }
  } catch (error) {
    yield put(updateMaterialsFail(error));
    console.log(error);
  }
}

function* watchUpdateMaterials() {
  yield takeLatest(UPDATE__MATERIALS, updateMaterialsSaga);
}

export default watchUpdateMaterials;
