export const GET__MATERIALS = "GET__MATERIALS";
export const GET__MATERIALS__SUCCESS = "GET__MATERIALS__SUCCESS";
export const GET__MATERIALS__FAIL = "GET__MATERIALS__FAIL";

export const getMaterials = (data) => ({
  type: GET__MATERIALS,
  payload: data,
});

export const getMaterialsSuccess = (data) => ({
  type: GET__MATERIALS__SUCCESS,
  payload: data,
});

export const getMaterialsFail = (error) => ({
  type: GET__MATERIALS__FAIL,
  payload: error,
});

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const getMaterialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__MATERIALS:
      return { ...state, loading: true, error: null };
    case GET__MATERIALS__SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET__MATERIALS__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getMaterialsReducer;
