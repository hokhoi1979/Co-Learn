export const GET__EARNING = "GET__EARNING";
export const GET__EARNING__SUCCESS = "GET__EARNING__SUCCESS";
export const GET__EARNING__FAIL = "GET__EARNING__FAIL";

export const getEarning = (data) => ({
  type: GET__EARNING,
  payload: data,
});

export const getEarningSuccess = (data) => ({
  type: GET__EARNING__SUCCESS,
  payload: data,
});

export const getEarningFail = (error) => ({
  type: GET__EARNING__FAIL,
  payload: error,
});

const initialState = {
  earning: null,
  loading: false,
  error: null,
};

const getEarningReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__EARNING:
      return { ...state, loading: true, error: null };
    case GET__EARNING__SUCCESS:
      return { ...state, loading: false, earning: action.payload };
    case GET__EARNING__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getEarningReducer;
