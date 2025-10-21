export const EDIT__BOOKING__ID = "EDIT__BOOKING__ID";
export const EDIT__BOOKING__ID__SUCCESS = "EDIT__BOOKING__ID__SUCCESS";
export const EDIT__BOOKING__ID__FAIL = "EDIT__BOOKING__ID__FAIL";

export const editBooking = (data) => ({
  type: EDIT__BOOKING__ID,
  payload: data,
});

export const editBookingSuccess = (data) => ({
  type: EDIT__BOOKING__ID__SUCCESS,
  payload: data,
});

export const editBookingFail = (error) => ({
  type: EDIT__BOOKING__ID__FAIL,
  payload: error,
});

const initialState = {
  status: null,
  loading: false,
  error: null,
};

const editBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT__BOOKING__ID:
      return { ...state, loading: true, error: null };
    case EDIT__BOOKING__ID__SUCCESS:
      return { ...state, loading: false, status: action.payload };
    case EDIT__BOOKING__ID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default editBookingReducer;
