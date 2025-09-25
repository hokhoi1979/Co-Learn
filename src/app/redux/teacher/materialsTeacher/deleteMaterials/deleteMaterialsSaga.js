import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../../../config/apiConfig";

import { toast } from "react-toastify";
import {
  DELETE__MATERIALS,
  deleteMaterialsFail,
  deleteMaterialsSuccess,
} from "./deleteMaterialsSlice";
import { getMaterialsSuccess } from "../getMaterials/getMaterialsSlice";

export function* deleteMaterialsSaga(action) {
  try {
    console.log("ACTION", action);

    const { id, lessonId } = action.payload;
    const response = yield call(api.delete, `/materials/${id}`);
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    ) {
      yield put(deleteMaterialsSuccess({ message: "Delete successful!" }));
      toast.success("Delete materials successful!");

      yield put(getMaterialsSuccess(lessonId));
    } else {
      yield put(deleteMaterialsFail(response.status));
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchDeleteMaterials() {
  yield takeLatest(DELETE__MATERIALS, deleteMaterialsSaga);
}

export default watchDeleteMaterials;
