export const POST__PAYMENT__COURSE = "POST__PAYMENT__COURSE";
export const POST__PAYMENT__COURSE__SUCCESS = "POST__PAYMENT__COURSE__SUCCESS";
export const POST__PAYMENT__COURSE__FAIL = "POST__PAYMENT__COURSE__FAIL";

export const postPaymentCourse = (data) => ({
  type: POST__PAYMENT__COURSE,
  payload: data,
});

export const postPaymentCourseSuccess = (data) => ({
  type: POST__PAYMENT__COURSE__SUCCESS,
  payload: data,
});

export const postPaymentCourseFail = (error) => ({
  type: POST__PAYMENT__COURSE__FAIL,
  payload: error,
});

const initialState = {
  createPaymentCourse: null,
  loading: false,
  error: null,
};

const postPaymentCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST__PAYMENT__COURSE:
      return { ...state, loading: true, error: null };
    case POST__PAYMENT__COURSE__SUCCESS:
      return { ...state, loading: false, createPaymentCourse: action.payload };
    case POST__PAYMENT__COURSE__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postPaymentCourseReducer;
