export const PUT__PROFILE__STUDENT = "PUT__PROFILE__STUDENT";
export const PUT__PROFILE__STUDENT__SUCCESS = "PUT__PROFILE__STUDENT__SUCCESS";
export const PUT__PROFILE__STUDENT__FAIL = "PUT__PROFILE__STUDENT__FAIL";

export const putProfileStudent = (data) => ({
  type: PUT__PROFILE__STUDENT,
  payload: data,
});

export const putProfileStudentSuccess = (data) => ({
  type: PUT__PROFILE__STUDENT__SUCCESS,
  payload: data,
});

export const putProfileStudentFail = (error) => ({
  type: PUT__PROFILE__STUDENT__FAIL,
  payload: error,
});

const initialState = {
  profileStudent: null,
  loading: false,
  error: null,
};

const putProfileStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT__PROFILE__STUDENT:
      return { ...state, loading: true, error: null };
    case PUT__PROFILE__STUDENT__SUCCESS:
      return { ...state, loading: false, profileStudent: action.payload };
    case PUT__PROFILE__STUDENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default putProfileStudentReducer;
