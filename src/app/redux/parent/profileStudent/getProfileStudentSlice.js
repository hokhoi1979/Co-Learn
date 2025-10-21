export const GET__PROFILE__STUDENT = "GET__PROFILE__STUDENT";
export const GET__PROFILE__STUDENT__SUCCESS = "GET__PROFILE__STUDENT__SUCCESS";
export const GET__PROFILE__STUDENT__FAIL = "GET__PROFILE__STUDENT__FAIL";

export const getProfileStudent = (data) => ({
  type: GET__PROFILE__STUDENT,
  payload: data,
});

export const getProfileStudentSuccess = (data) => ({
  type: GET__PROFILE__STUDENT__SUCCESS,
  payload: data,
});

export const getProfileStudentFail = (error) => ({
  type: GET__PROFILE__STUDENT__FAIL,
  payload: error,
});

const initialState = {
  profileStudent: null,
  loading: false,
  error: null,
};

const getProfileStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__PROFILE__STUDENT:
      return { ...state, loading: true, error: null };
    case GET__PROFILE__STUDENT__SUCCESS:
      return { ...state, loading: false, profileStudent: action.payload };
    case GET__PROFILE__STUDENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getProfileStudentReducer;
