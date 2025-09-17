export const GET__ALL__PARENT = "GET__ALL__PARENT";
export const GET__ALL__PARENT__SUCCESS = "GET__ALL__PARENT__SUCCESS";
export const GET__ALL__PARENT__FAIL = "GET__ALL__PARENT__FAIL";

export const getAllParent = (data) => ({
  type: GET__ALL__PARENT,
  payload: data,
});

export const getAllParentSuccess = (data) => ({
  type: GET__ALL__PARENT__SUCCESS,
  payload: data,
});

export const getAllParentFail = (error) => ({
  type: GET__ALL__PARENT__FAIL,
  payload: error,
});

const initialState = {
  allParent: null,
  loading: false,
  error: null,
};

const getAllParentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__ALL__PARENT:
      return { ...state, loading: true, error: null };
    case GET__ALL__PARENT__SUCCESS:
      return { ...state, loading: false, allParent: action.payload };
    case GET__ALL__PARENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getAllParentReducer;
