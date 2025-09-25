export const CREATE__COURSE = "CREATE__COURSE";
export const CREATE__COURSE__SUCCESS = "CREATE__COURSE__SUCCESS";
export const CREATE__COURSE__FAIL = "CREATE__COURSE__FAIL";

export const createCourse = (data) => ({
  type: CREATE__COURSE,
  payload: data,
});

export const createCourseSuccess = (data) => ({
  type: CREATE__COURSE__SUCCESS,
  payload: data,
});

export const createCourseFail = (error) => ({
  type: CREATE__COURSE__FAIL,
  payload: error,
});

const initialState = {
  createCourse: null,
  loading: false,
  error: null,
};

const createCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE__COURSE:
      return { ...state, loading: true, error: null };
    case CREATE__COURSE__SUCCESS:
      return { ...state, loading: false, createCourse: action.payload };
    case CREATE__COURSE__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default createCourseReducer;
