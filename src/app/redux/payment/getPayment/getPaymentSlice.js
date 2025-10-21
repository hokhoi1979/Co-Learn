export const GET__PAYMENT = "GET__PAYMENT";
export const GET__PAYMENT__SUCCESS = "GET__PAYMENT__SUCCESS";
export const GET__PAYMENT__FAIL = "GET__PAYMENT__FAIL";

export const getPayment = (data) => ({
  type: GET__PAYMENT,
  payload: data,
});

export const getPaymentSuccess = (data) => ({
  type: GET__PAYMENT__SUCCESS,
  payload: data,
});

export const getPaymentFail = (error) => ({
  type: GET__PAYMENT__FAIL,
  payload: error,
});

const initialState = {
  payment: null,
  loading: false,
  error: null,
};

const getPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__PAYMENT:
      return { ...state, loading: true, error: null };
    case GET__PAYMENT__SUCCESS:
      return { ...state, loading: false, payment: action.payload };
    case GET__PAYMENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getPaymentReducer;
