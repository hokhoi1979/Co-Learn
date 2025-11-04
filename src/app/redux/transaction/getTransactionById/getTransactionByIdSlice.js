export const GET__TRANSACTION__ID = "GET__TRANSACTION__ID";
export const GET__TRANSACTION__ID__SUCCESS = "GET__TRANSACTION__ID__SUCCESS";
export const GET__TRANSACTION__ID__FAIL = "GET__TRANSACTION__ID__FAIL";

export const getTransactionById = (data) => ({
  type: GET__TRANSACTION__ID,
  payload: data,
});

export const getTransactionByIdSuccess = (data) => ({
  type: GET__TRANSACTION__ID__SUCCESS,
  payload: data,
});

export const getTransactionByIdFail = (error) => ({
  type: GET__TRANSACTION__ID__FAIL,
  payload: error,
});

const initialState = {
  transactionId: null,
  loading: false,
  error: null,
};

const getTransactionByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__TRANSACTION__ID:
      return { ...state, loading: true, error: null };
    case GET__TRANSACTION__ID__SUCCESS:
      return { ...state, loading: false, transactionId: action.payload };
    case GET__TRANSACTION__ID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getTransactionByIdReducer;
