export const POST__PROFILE__STUDENT = "POST__PROFILE__STUDENT";
export const POST__PROFILE__STUDENT__SUCCESS =
  "POST__PROFILE__STUDENT__SUCCESS";
export const POST__PROFILE__STUDENT__FAIL = "POST__PROFILE__STUDENT__FAIL";

export const postProfileStudent = (data) => ({
  type: POST__PROFILE__STUDENT,
  payload: data,
});

export const postProfileStudentSuccess = (data) => ({
  type: POST__PROFILE__STUDENT__SUCCESS,
  payload: data,
});

export const postProfileStudentFail = (error) => ({
  type: POST__PROFILE__STUDENT__FAIL,
  payload: error,
});

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const postProfileStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST__PROFILE__STUDENT:
      return { ...state, loading: true, error: null };
    case POST__PROFILE__STUDENT__SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case POST__PROFILE__STUDENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postProfileStudentReducer;
