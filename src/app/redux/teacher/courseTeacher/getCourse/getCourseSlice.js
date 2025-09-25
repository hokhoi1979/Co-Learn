export const GET__COURSE = "GET__COURSE";
export const GET__COURSE__SUCCESS = "GET__COURSE__SUCCESS";
export const GET__COURSE__FAIL = "GET__COURSE__FAIL";

export const getCourse = (data) => ({
  type: GET__COURSE,
  payload: data,
});

export const getCourseSuccess = (data) => ({
  type: GET__COURSE__SUCCESS,
  payload: data,
});

export const getCourseFail = (error) => ({
  type: GET__COURSE__FAIL,
  payload: error,
});

const initialState = {
  course: null,
  loading: false,
  error: null,
};

const getCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__COURSE:
      return { ...state, loading: true, error: null };
    case GET__COURSE__SUCCESS:
      return { ...state, loading: false, course: action.payload };
    case GET__COURSE__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getCourseReducer;
