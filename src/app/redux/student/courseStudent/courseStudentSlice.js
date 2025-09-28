export const GET__COURSE__STUDENT = "GET__COURSE__STUDENT";
export const GET__COURSE__STUDENT__SUCCESS = "GET__COURSE__STUDENT__SUCCESS";
export const GET__COURSE__STUDENT__FAIL = "GET__COURSE__STUDENT__FAIL";

export const getCourseStudent = (data) => ({
  type: GET__COURSE__STUDENT,
  payload: data,
});

export const getCourseStudentSuccess = (data) => ({
  type: GET__COURSE__STUDENT__SUCCESS,
  payload: data,
});

export const getCourseStudentFail = (error) => ({
  type: GET__COURSE__STUDENT__FAIL,
  payload: error,
});

const initialState = {
  courseStudent: null,
  loading: false,
  error: null,
};

const getCourseStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__COURSE__STUDENT:
      return { ...state, loading: true, error: null };
    case GET__COURSE__STUDENT__SUCCESS:
      return { ...state, loading: false, courseStudent: action.payload };
    case GET__COURSE__STUDENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getCourseStudentReducer;
