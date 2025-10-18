export const GET__ENROLLMENT__STUDENT = "GET__ENROLLMENT__STUDENT";
export const GET__ENROLLMENT__STUDENT__SUCCESS =
  "GET__ENROLLMENT__STUDENT__SUCCESS";
export const GET__ENROLLMENT__STUDENT__FAIL = "GET__ENROLLMENT__STUDENT__FAIL";

export const getEnrollmentStudent = (data) => ({
  type: GET__ENROLLMENT__STUDENT,
  payload: data,
});

export const getEnrollmentStudentSuccess = (data) => ({
  type: GET__ENROLLMENT__STUDENT__SUCCESS,
  payload: data,
});

export const getEnrollmentStudentFail = (error) => ({
  type: GET__ENROLLMENT__STUDENT__FAIL,
  payload: error,
});

const initialState = {
  enrollmentStudent: [],
  loading: false,
  error: null,
};

const getEnrollmentStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__ENROLLMENT__STUDENT:
      return { ...state, loading: true, error: null };
    case GET__ENROLLMENT__STUDENT__SUCCESS:
      return { ...state, loading: false, enrollmentStudent: action.payload };
    case GET__ENROLLMENT__STUDENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getEnrollmentStudentReducer;
