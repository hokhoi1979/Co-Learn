export const EDIT__PROFILE__TEACHER = "EDIT__PROFILE__TEACHER";
export const EDIT__PROFILE__TEACHER__SUCCESS =
  "EDIT__PROFILE__TEACHER__SUCCESS";
export const EDIT__PROFILE__TEACHER__FAIL = "EDIT__PROFILE__TEACHER__FAIL";

export const editProfileTeacher = (data) => ({
  type: EDIT__PROFILE__TEACHER,
  payload: data,
});

export const editProfileTeacherSuccess = (data) => ({
  type: EDIT__PROFILE__TEACHER__SUCCESS,
  payload: data,
});

export const editProfileTeacherFail = (error) => ({
  type: EDIT__PROFILE__TEACHER__FAIL,
  payload: error,
});

const initialState = {
  editProfileTeacher: null,
  loading: false,
  error: null,
};

const editProfileTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT__PROFILE__TEACHER:
      return { ...state, loading: true, error: null };
    case EDIT__PROFILE__TEACHER__SUCCESS:
      return { ...state, loading: false, editProfileTeacher: action.payload };
    case EDIT__PROFILE__TEACHER__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default editProfileTeacherReducer;
