export const GET__BOOKING__TEACHER = "GET__BOOKING__TEACHER";
export const GET__BOOKING__TEACHER__SUCCESS = "GET__BOOKING__TEACHER__SUCCESS";
export const GET__BOOKING__TEACHER__FAIL = "GET__BOOKING__TEACHER__FAIL";

export const getBookingTeacher = (data) => ({
  type: GET__BOOKING__TEACHER,
  payload: data,
});

export const getBookingTeacherSuccess = (data) => ({
  type: GET__BOOKING__TEACHER__SUCCESS,
  payload: data,
});

export const getBookingTeacherFail = (error) => ({
  type: GET__BOOKING__TEACHER__FAIL,
  payload: error,
});

const initialState = {
  getBooking_Teacher: null,
  loading: false,
  error: null,
};

const getBookingTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__BOOKING__TEACHER:
      return { ...state, loading: true, error: null };
    case GET__BOOKING__TEACHER__SUCCESS:
      return { ...state, loading: false, getBooking_Teacher: action.payload };
    case GET__BOOKING__TEACHER__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getBookingTeacherReducer;
