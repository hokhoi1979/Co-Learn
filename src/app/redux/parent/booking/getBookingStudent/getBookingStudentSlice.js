export const GET__BOOKING__STUDENT = "GET__BOOKING__STUDENT";
export const GET__BOOKING__STUDENT__SUCCESS = "GET__BOOKING__STUDENT__SUCCESS";
export const GET__BOOKING__STUDENT__FAIL = "GET__BOOKING__STUDENT__FAIL";

export const getBookingStudent = (data) => ({
  type: GET__BOOKING__STUDENT,
  payload: data,
});

export const getBookingStudentSuccess = (data) => ({
  type: GET__BOOKING__STUDENT__SUCCESS,
  payload: data,
});

export const getBookingStudentFail = (error) => ({
  type: GET__BOOKING__STUDENT__FAIL,
  payload: error,
});

const initialState = {
  getBooking_Student: null,
  loading: false,
  error: null,
};

const getBookingStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__BOOKING__STUDENT:
      return { ...state, loading: true, error: null };
    case GET__BOOKING__STUDENT__SUCCESS:
      return { ...state, loading: false, getBooking_Student: action.payload };
    case GET__BOOKING__STUDENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getBookingStudentReducer;
