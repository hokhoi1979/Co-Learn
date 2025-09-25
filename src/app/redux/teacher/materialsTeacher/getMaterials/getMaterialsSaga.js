import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import {
  GET__MATERIALS,
  getMaterialsFail,
  getMaterialsSuccess,
} from "./getMaterialsSlice";

export function* getMaterialsSaga(action) {
  try {
    const id = action.payload;
    const response = yield call(api.get, `/lessons/${id}/materials`);
    if (response.status === 200 || response.status === 201) {
      yield put(getMaterialsSuccess(response.data));
      console.log("DATA MATE", response.data);
    } else {
      yield put(getMaterialsFail(response.status));
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchGetMaterials() {
  yield takeLatest(GET__MATERIALS, getMaterialsSaga);
}

export default watchGetMaterials;
