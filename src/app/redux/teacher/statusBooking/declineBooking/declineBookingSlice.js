export const DECLINE__BOOKING__TEACHER = "DECLINE__BOOKING__TEACHER";
export const DECLINE__BOOKING__TEACHER__SUCCESS =
  "DECLINE__BOOKING__TEACHER__SUCCESS";
export const DECLINE__BOOKING__TEACHER__FAIL =
  "DECLINE__BOOKING__TEACHER__FAIL";

export const declineBookingTeacher = (data) => ({
  type: DECLINE__BOOKING__TEACHER,
  payload: data,
});

export const declineBookingTeacherSuccess = (data) => ({
  type: DECLINE__BOOKING__TEACHER__SUCCESS,
  payload: data,
});

export const declineBookingTeacherFail = (error) => ({
  type: DECLINE__BOOKING__TEACHER__FAIL,
  payload: error,
});

const initialState = {
  statusDecline: null,
  loading: false,
  error: null,
};

const declineBookingTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECLINE__BOOKING__TEACHER:
      return { ...state, loading: true, error: null };
    case DECLINE__BOOKING__TEACHER__SUCCESS:
      return { ...state, loading: false, statusDecline: action.payload };
    case DECLINE__BOOKING__TEACHER__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default declineBookingTeacherReducer;
