export const DELETE__BOOKING__ID = "DELETE__BOOKING__ID";
export const DELETE__BOOKING__ID__SUCCESS = "DELETE__BOOKING__ID__SUCCESS";
export const DELETE__BOOKING__ID__FAIL = "DELETE__BOOKING__ID__FAIL";

export const deleteBooking = (data) => ({
  type: DELETE__BOOKING__ID,
  payload: data,
});

export const deleteBookingSuccess = (data) => ({
  type: DELETE__BOOKING__ID__SUCCESS,
  payload: data,
});

export const deleteBookingFail = (error) => ({
  type: DELETE__BOOKING__ID__FAIL,
  payload: error,
});

const initialState = {
  status: null,
  loading: false,
  error: null,
};

const deleteBookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE__BOOKING__ID:
      return { ...state, loading: true, error: null };
    case DELETE__BOOKING__ID__SUCCESS:
      return { ...state, loading: false, status: action.payload };
    case DELETE__BOOKING__ID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default deleteBookingReducer;
