export const UPDATE__COURSE = "UPDATE__COURSE";
export const UPDATE__COURSE__SUCCESS = "UPDATE__COURSE__SUCCESS";
export const UPDATE__COURSE__FAIL = "UPDATE__COURSE__FAIL";

export const updateCourse = (data) => ({
  type: UPDATE__COURSE,
  payload: data,
});

export const updateCourseSuccess = (data) => ({
  type: UPDATE__COURSE__SUCCESS,
  payload: data,
});

export const updateCourseFail = (error) => ({
  type: UPDATE__COURSE__FAIL,
  payload: error,
});

const initialState = {
  updateCourse: null,
  loading: false,
  error: null,
};

const updateCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE__COURSE:
      return { ...state, loading: true, error: null };
    case UPDATE__COURSE__SUCCESS:
      return { ...state, loading: false, updateCourse: action.payload };
    case UPDATE__COURSE__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default updateCourseReducer;
