export const DELETE__COURSE = "DELETE__COURSE";
export const DELETE__COURSE__SUCCESS = "DELETE__COURSE__SUCCESS";
export const DELETE__COURSE__FAIL = "DELETE__COURSE__FAIL";

export const deleteCourse = (data) => ({
  type: DELETE__COURSE,
  payload: data,
});

export const deleteCourseSuccess = (data) => ({
  type: DELETE__COURSE__SUCCESS,
  payload: data,
});

export const deleteCourseFail = (error) => ({
  type: DELETE__COURSE__FAIL,
  payload: error,
});

const initialState = {
  deleteCourse: null,
  loading: false,
  error: null,
};

const deleteCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE__COURSE:
      return { ...state, loading: true, error: null };
    case DELETE__COURSE__SUCCESS:
      return { ...state, loading: false, deleteCourse: action.payload };
    case DELETE__COURSE__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default deleteCourseReducer;
