export const GET__COURSE__TEACHER = "GET__COURSE__TEACHER";
export const GET__COURSE__TEACHER__SUCCESS = "GET__COURSE__TEACHER__SUCCESS";
export const GET__COURSE__TEACHER__FAIL = "GET__COURSE__TEACHER__FAIL";

export const getCourseTeacher = (data) => ({
  type: GET__COURSE__TEACHER,
  payload: data,
});

export const getCourseTeacherSuccess = (data) => ({
  type: GET__COURSE__TEACHER__SUCCESS,
  payload: data,
});

export const getCourseTeacherFail = (error) => ({
  type: GET__COURSE__TEACHER__FAIL,
  payload: error,
});

const initialState = {
  courseTeacher: [],
  loading: false,
  error: null,
};

const getCourseTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__COURSE__TEACHER:
      return { ...state, loading: true, error: null };
    case GET__COURSE__TEACHER__SUCCESS:
      return { ...state, loading: false, courseTeacher: action.payload };
    case GET__COURSE__TEACHER__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getCourseTeacherReducer;
