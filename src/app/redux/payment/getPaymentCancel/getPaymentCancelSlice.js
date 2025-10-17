export const GET__PAYMENT__CANCEL = "GET__PAYMENT__CANCEL";
export const GET__PAYMENT__CANCEL__SUCCESS = "GET__PAYMENT__CANCEL__SUCCESS";
export const GET__PAYMENT__CANCEL__FAIL = "GET__PAYMENT__CANCEL__FAIL";

export const getPaymentCancel = (data) => ({
  type: GET__PAYMENT__CANCEL,
  payload: data,
});

export const getPaymentCancelSuccess = (data) => ({
  type: GET__PAYMENT__CANCEL__SUCCESS,
  payload: data,
});

export const getPaymentCancelFail = (error) => ({
  type: GET__PAYMENT__CANCEL__FAIL,
  payload: error,
});

const initialState = {
  paymentCancel: null,
  loading: false,
  error: null,
};

const getPaymentCancelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__PAYMENT__CANCEL:
      return { ...state, loading: true, error: null };
    case GET__PAYMENT__CANCEL__SUCCESS:
      return { ...state, loading: false, paymentCancel: action.payload };
    case GET__PAYMENT__CANCEL__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getPaymentCancelReducer;
