export const CREATE__BOOKING__ID = "CREATE__BOOKING__ID";
export const CREATE__BOOKING__ID__SUCCESS = "CREATE__BOOKING__ID__SUCCESS";
export const CREATE__BOOKING__ID__FAIL = "CREATE__BOOKING__ID__FAIL";

export const createBookingId = (data) => ({
  type: CREATE__BOOKING__ID,
  payload: data,
});

export const createBookingIdSuccess = (data) => ({
  type: CREATE__BOOKING__ID__SUCCESS,
  payload: data,
});

export const createBookingIdFail = (error) => ({
  type: CREATE__BOOKING__ID__FAIL,
  payload: error,
});

const initialState = {
  postBookingId: null,
  loading: false,
  error: null,
};

const createBookingIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE__BOOKING__ID:
      return { ...state, loading: true, error: null };
    case CREATE__BOOKING__ID__SUCCESS:
      return { ...state, loading: false, postBookingId: action.payload };
    case CREATE__BOOKING__ID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default createBookingIdReducer;
