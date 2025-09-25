export const DELETE__MATERIALS = "DELETE__MATERIALS";
export const DELETE__MATERIALS__SUCCESS = "DELETE__MATERIALS__SUCCESS";
export const DELETE__MATERIALS__FAIL = "DELETE__MATERIALS__FAIL";

export const deleteMaterials = (data) => ({
  type: DELETE__MATERIALS,
  payload: data,
});

export const deleteMaterialsSuccess = (data) => ({
  type: DELETE__MATERIALS__SUCCESS,
  payload: data,
});

export const deleteMaterialsFail = (error) => ({
  type: DELETE__MATERIALS__FAIL,
  payload: error,
});

const initialState = {
  deleteMaterials: null,
  loading: false,
  error: null,
};

const deleteMaterialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE__MATERIALS:
      return { ...state, loading: true, error: null };
    case DELETE__MATERIALS__SUCCESS:
      return { ...state, loading: false, deleteMaterials: action.payload };
    case DELETE__MATERIALS__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default deleteMaterialsReducer;
