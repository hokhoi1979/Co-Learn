export const GET__ENROLLMENT = "GET__ENROLLMENT";
export const GET__ENROLLMENT__SUCCESS = "GET__ENROLLMENT__SUCCESS";
export const GET__ENROLLMENT__FAIL = "GET__ENROLLMENT__FAIL";

export const getEnrollment = (data) => ({
  type: GET__ENROLLMENT,
  payload: data,
});

export const getEnrollmentSuccess = (data) => ({
  type: GET__ENROLLMENT__SUCCESS,
  payload: data,
});

export const getEnrollmentFail = (error) => ({
  type: GET__ENROLLMENT__FAIL,
  payload: error,
});

const initialState = {
  enrollment: null,
  loading: false,
  error: null,
};

const getEnrollmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__ENROLLMENT:
      return { ...state, loading: true, error: null };
    case GET__ENROLLMENT__SUCCESS:
      return { ...state, loading: false, enrollment: action.payload };
    case GET__ENROLLMENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getEnrollmentReducer;
