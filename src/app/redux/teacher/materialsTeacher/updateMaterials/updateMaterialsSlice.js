export const UPDATE__MATERIALS = "UPDATE__MATERIALS";
export const UPDATE__MATERIALS__SUCCESS = "UPDATE__MATERIALS__SUCCESS";
export const UPDATE__MATERIALS__FAIL = "UPDATE__MATERIALS__FAIL";

export const updateMaterials = (data) => ({
  type: UPDATE__MATERIALS,
  payload: data,
});

export const updateMaterialsSuccess = (data) => ({
  type: UPDATE__MATERIALS__SUCCESS,
  payload: data,
});

export const updateMaterialsFail = (error) => ({
  type: UPDATE__MATERIALS__FAIL,
  payload: error,
});

const initialState = {
  updateMaterials: null,
  loading: false,
  error: null,
};

const updateMaterialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE__MATERIALS:
      return { ...state, loading: true, error: null };
    case UPDATE__MATERIALS__SUCCESS:
      return { ...state, loading: false, updateMaterials: action.payload };
    case UPDATE__MATERIALS__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default updateMaterialsReducer;
