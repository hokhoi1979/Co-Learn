export const GET__PROFILE__TEACHER__ID = "GET__PROFILE__TEACHER__ID";
export const GET__PROFILE__TEACHER__ID__SUCCESS =
  "GET__PROFILE__TEACHER__ID__SUCCESS";
export const GET__PROFILE__TEACHER__ID__FAIL =
  "GET__PROFILE__TEACHER__ID__FAIL";

export const getProfileTeacherId = (data) => ({
  type: GET__PROFILE__TEACHER__ID,
  payload: data,
});

export const getProfileTeacherIdSuccess = (data) => ({
  type: GET__PROFILE__TEACHER__ID__SUCCESS,
  payload: data,
});

export const getProfileTeacherIdFail = (error) => ({
  type: GET__PROFILE__TEACHER__ID__FAIL,
  payload: error,
});

const initialState = {
  profileTeacherId: null,
  loading: false,
  error: null,
};

const getProfileTeacherIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__PROFILE__TEACHER__ID:
      return { ...state, loading: true, error: null };
    case GET__PROFILE__TEACHER__ID__SUCCESS:
      return { ...state, loading: false, profileTeacherId: action.payload };
    case GET__PROFILE__TEACHER__ID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getProfileTeacherIdReducer;
