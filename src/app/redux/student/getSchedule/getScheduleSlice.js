export const GET__SCHEDULE__STUDENT = "GET__SCHEDULE__STUDENT";
export const GET__SCHEDULE__STUDENT__SUCCESS =
  "GET__SCHEDULE__STUDENT__SUCCESS";
export const GET__SCHEDULE__STUDENT__FAIL = "GET__SCHEDULE__STUDENT__FAIL";

export const getScheduleStudent = (data) => ({
  type: GET__SCHEDULE__STUDENT,
  payload: data,
});

export const getScheduleStudentSuccess = (data) => ({
  type: GET__SCHEDULE__STUDENT__SUCCESS,
  payload: data,
});

export const getScheduleStudentFail = (error) => ({
  type: GET__SCHEDULE__STUDENT__FAIL,
  payload: error,
});

const initialState = {
  scheduleStudent: null,
  loading: false,
  error: null,
};

const getScheduleStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__SCHEDULE__STUDENT:
      return { ...state, loading: true, error: null };
    case GET__SCHEDULE__STUDENT__SUCCESS:
      return { ...state, loading: false, scheduleStudent: action.payload };
    case GET__SCHEDULE__STUDENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getScheduleStudentReducer;
