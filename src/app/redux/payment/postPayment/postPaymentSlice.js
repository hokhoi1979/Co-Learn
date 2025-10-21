export const POST__PAYMENT = "POST__PAYMENT";
export const POST__PAYMENT__SUCCESS = "POST__PAYMENT__SUCCESS";
export const POST__PAYMENT__FAIL = "POST__PAYMENT__FAIL";

export const postPayment = (data) => ({
  type: POST__PAYMENT,
  payload: data,
});

export const postPaymentSuccess = (data) => ({
  type: POST__PAYMENT__SUCCESS,
  payload: data,
});

export const postPaymentFail = (error) => ({
  type: POST__PAYMENT__FAIL,
  payload: error,
});

const initialState = {
  createPayment: null,
  loading: false,
  error: null,
};

const postPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST__PAYMENT:
      return { ...state, loading: true, error: null };
    case POST__PAYMENT__SUCCESS:
      return { ...state, loading: false, createPayment: action.payload };
    case POST__PAYMENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postPaymentReducer;
