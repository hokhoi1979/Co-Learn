export const CREATE__MATERIALS = "CREATE__MATERIALS";
export const CREATE__MATERIALS__SUCCESS = "CREATE__MATERIALS__SUCCESS";
export const CREATE__MATERIALS__FAIL = "CREATE__MATERIALS__FAIL";

export const createMaterials = (data) => ({
  type: CREATE__MATERIALS,
  payload: data,
});

export const createMaterialsSuccess = (data) => ({
  type: CREATE__MATERIALS__SUCCESS,
  payload: data,
});

export const createMaterialsFail = (error) => ({
  type: CREATE__MATERIALS__FAIL,
  payload: error,
});

const initialState = {
  createMaterials: null,
  loading: false,
  error: null,
};

const createMaterialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE__MATERIALS:
      return { ...state, loading: true, error: null };
    case CREATE__MATERIALS__SUCCESS:
      return { ...state, loading: false, createMaterials: action.payload };
    case CREATE__MATERIALS__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default createMaterialsReducer;
