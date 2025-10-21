export const GET__PROFILE__TEACHER = "GET__PROFILE__TEACHER";
export const GET__PROFILE__TEACHER__SUCCESS = "GET__PROFILE__TEACHER__SUCCESS";
export const GET__PROFILE__TEACHER__FAIL = "GET__PROFILE__TEACHER__FAIL";

export const getProfileTeacher = (data) => ({
  type: GET__PROFILE__TEACHER,
  payload: data,
});

export const getProfileTeacherSuccess = (data) => ({
  type: GET__PROFILE__TEACHER__SUCCESS,
  payload: data,
});

export const getProfileTeacherFail = (error) => ({
  type: GET__PROFILE__TEACHER__FAIL,
  payload: error,
});

const initialState = {
  profileTeacher: null,
  loading: false,
  error: null,
};

const getProfileTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__PROFILE__TEACHER:
      return { ...state, loading: true, error: null };
    case GET__PROFILE__TEACHER__SUCCESS:
      return { ...state, loading: false, profileTeacher: action.payload };
    case GET__PROFILE__TEACHER__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getProfileTeacherReducer;
