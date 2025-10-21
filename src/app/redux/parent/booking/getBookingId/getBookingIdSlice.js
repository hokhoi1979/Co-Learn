export const GET__BOOKING__ID = "GET__BOOKING__ID";
export const GET__BOOKING__ID__SUCCESS = "GET__BOOKING__ID__SUCCESS";
export const GET__BOOKING__ID__FAIL = "GET__BOOKING__ID__FAIL";

export const getBookingId = (data) => ({
  type: GET__BOOKING__ID,
  payload: data,
});

export const getBookingIdSuccess = (data) => ({
  type: GET__BOOKING__ID__SUCCESS,
  payload: data,
});

export const getBookingIdFail = (error) => ({
  type: GET__BOOKING__ID__FAIL,
  payload: error,
});

const initialState = {
  getBooking_Id: null,
  loading: false,
  error: null,
};

const getBookingIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__BOOKING__ID:
      return { ...state, loading: true, error: null };
    case GET__BOOKING__ID__SUCCESS:
      return { ...state, loading: false, getBooking_Id: action.payload };
    case GET__BOOKING__ID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getBookingIdReducer;
