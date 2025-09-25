export const GET__USERID = "GET__USERID";
export const GET__USERID__SUCCESS = "GET__USERID__SUCCESS";
export const GET__USERID__FAIL = "GET__USERID__FAIL";

export const getAllParent = (data) => ({
  type: GET__USERID,
  payload: data,
});

export const getAllParentSuccess = (data) => ({
  type: GET__USERID__SUCCESS,
  payload: data,
});

export const getAllParentFail = (error) => ({
  type: GET__USERID__FAIL,
  payload: error,
});

const initialState = {
  getUserId: null,
  loading: false,
  error: null,
};

const getAllParentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__USERID:
      return { ...state, loading: true, error: null };
    case GET__USERID__SUCCESS:
      return { ...state, loading: false, getUserId: action.payload };
    case GET__USERID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getAllParentReducer;
