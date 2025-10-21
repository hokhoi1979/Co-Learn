import { call, delay, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  DELETE__MATERIALS,
  deleteMaterialsFail,
  deleteMaterialsSuccess,
} from "./deleteMaterialsSlice";
import { getMaterials } from "../getMaterials/getMaterialsSlice";

export function* deleteMaterialsSaga(action) {
  try {
    const { id, lessonId } = action.payload;
    const response = yield call(api.delete, `/materials/${id}`);
    console.log("DELETE RESPONSE", response);

    if ([200, 201, 204].includes(response.status)) {
      yield put(deleteMaterialsSuccess({ id }));
      toast.success("Delete materials successful!");

      console.log("RE-FETCH MATERIALS FOR", lessonId);
      yield delay(300);
      yield put(getMaterials(lessonId));
    } else {
      yield put(deleteMaterialsFail(response.status));
    }
  } catch (error) {
    console.log("DELETE ERROR", error);
  }
}

function* watchDeleteMaterials() {
  yield takeLatest(DELETE__MATERIALS, deleteMaterialsSaga);
}

export default watchDeleteMaterials;
