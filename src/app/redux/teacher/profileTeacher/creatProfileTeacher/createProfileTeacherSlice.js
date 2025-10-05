export const CREATE__PROFILE__TEACHER = "CREATE__PROFILE__TEACHER";
export const CREATE__PROFILE__TEACHER__SUCCESS =
  "CREATE__PROFILE__TEACHER__SUCCESS";
export const CREATE__PROFILE__TEACHER__FAIL = "CREATE__PROFILE__TEACHER__FAIL";

export const createProfileTeacher = (data) => ({
  type: CREATE__PROFILE__TEACHER,
  payload: data,
});

export const createProfileTeacherSuccess = (data) => ({
  type: CREATE__PROFILE__TEACHER__SUCCESS,
  payload: data,
});

export const createProfileTeacherFail = (error) => ({
  type: CREATE__PROFILE__TEACHER__FAIL,
  payload: error,
});

const initialState = {
  postProfileTeacher: null,
  loading: false,
  error: null,
};

const createProfileTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE__PROFILE__TEACHER:
      return { ...state, loading: true, error: null };
    case CREATE__PROFILE__TEACHER__SUCCESS:
      return { ...state, loading: false, postProfileTeacher: action.payload };
    case CREATE__PROFILE__TEACHER__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default createProfileTeacherReducer;
