export const GET__ALL__TRANSACTION = "GET__ALL__TRANSACTION";
export const GET__ALL__TRANSACTION__SUCCESS = "GET__ALL__TRANSACTION__SUCCESS";
export const GET__ALL__TRANSACTION__FAIL = "GET__ALL__TRANSACTION__FAIL";

export const getAllTransaction = (data) => ({
  type: GET__ALL__TRANSACTION,
  payload: data,
});

export const getAllTransactionSuccess = (data) => ({
  type: GET__ALL__TRANSACTION__SUCCESS,
  payload: data,
});

export const getAllTransactionFail = (error) => ({
  type: GET__ALL__TRANSACTION__FAIL,
  payload: error,
});

const initialState = {
  allTransaction: null,
  loading: false,
  error: null,
};

const getAllTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__ALL__TRANSACTION:
      return { ...state, loading: true, error: null };
    case GET__ALL__TRANSACTION__SUCCESS:
      return { ...state, loading: false, allTransaction: action.payload };
    case GET__ALL__TRANSACTION__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getAllTransactionReducer;
