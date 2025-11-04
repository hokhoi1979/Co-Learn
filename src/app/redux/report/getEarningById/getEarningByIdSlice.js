export const GET__EARNING_ID = "GET__EARNING_ID";
export const GET__EARNING_ID__SUCCESS = "GET__EARNING_ID__SUCCESS";
export const GET__EARNING_ID__FAIL = "GET__EARNING_ID__FAIL";

export const getEarningId = (data) => ({
  type: GET__EARNING_ID,
  payload: data,
});

export const getEarningIdSuccess = (data) => ({
  type: GET__EARNING_ID__SUCCESS,
  payload: data,
});

export const getEarningIdFail = (error) => ({
  type: GET__EARNING_ID__FAIL,
  payload: error,
});

const initialState = {
  earningId: null,
  loading: false,
  error: null,
};

const getEarningIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__EARNING_ID:
      return { ...state, loading: true, error: null };
    case GET__EARNING_ID__SUCCESS:
      return { ...state, loading: false, earningId: action.payload };
    case GET__EARNING_ID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getEarningIdReducer;
