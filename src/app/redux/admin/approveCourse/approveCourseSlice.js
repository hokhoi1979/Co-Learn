export const APPROVE__COURSE = "APPROVE__COURSE";
export const APPROVE__COURSE__SUCCESS = "APPROVE__COURSE__SUCCESS";
export const APPROVE__COURSE__FAIL = "APPROVE__COURSE__FAIL";

export const approveCourse = (data) => ({
  type: APPROVE__COURSE,
  payload: data,
});

export const approveCourseSuccess = (data) => ({
  type: APPROVE__COURSE__SUCCESS,
  payload: data,
});

export const approveCourseFail = (error) => ({
  type: APPROVE__COURSE__FAIL,
  payload: error,
});

const initialState = {
  isApprove: false,
  loading: false,
  error: null,
};

const approveCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVE__COURSE:
      return { ...state, loading: true, error: null };
    case APPROVE__COURSE__SUCCESS:
      return { ...state, loading: false, isApprove: action.payload };
    case APPROVE__COURSE__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default approveCourseReducer;
