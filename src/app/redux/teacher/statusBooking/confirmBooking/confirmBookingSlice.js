export const CONFIRM__BOOKING__TEACHER = "CONFIRM__BOOKING__TEACHER";
export const CONFIRM__BOOKING__TEACHER__SUCCESS =
  "CONFIRM__BOOKING__TEACHER__SUCCESS";
export const CONFIRM__BOOKING__TEACHER__FAIL =
  "CONFIRM__BOOKING__TEACHER__FAIL";

export const confirmBookingTeacher = (data) => ({
  type: CONFIRM__BOOKING__TEACHER,
  payload: data,
});

export const confirmBookingTeacherSuccess = (data) => ({
  type: CONFIRM__BOOKING__TEACHER__SUCCESS,
  payload: data,
});

export const confirmBookingTeacherFail = (error) => ({
  type: CONFIRM__BOOKING__TEACHER__FAIL,
  payload: error,
});

const initialState = {
  statusConfirm: null,
  loading: false,
  error: null,
};

const confirmBookingTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM__BOOKING__TEACHER:
      return { ...state, loading: true, error: null };
    case CONFIRM__BOOKING__TEACHER__SUCCESS:
      return { ...state, loading: false, statusConfirm: action.payload };
    case CONFIRM__BOOKING__TEACHER__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default confirmBookingTeacherReducer;
