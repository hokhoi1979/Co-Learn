export const GET__PROFILE__STUDENT__ID = "GET__PROFILE__STUDENT__ID";
export const GET__PROFILE__STUDENT__ID__SUCCESS =
  "GET__PROFILE__STUDENT__ID__SUCCESS";
export const GET__PROFILE__STUDENT__ID__FAIL =
  "GET__PROFILE__STUDENT__ID__FAIL";

export const getProfileStudentById = (data) => ({
  type: GET__PROFILE__STUDENT__ID,
  payload: data,
});

export const getProfileStudentByIdSuccess = (data) => ({
  type: GET__PROFILE__STUDENT__ID__SUCCESS,
  payload: data,
});

export const getProfileStudentByIdFail = (error) => ({
  type: GET__PROFILE__STUDENT__ID__FAIL,
  payload: error,
});

const initialState = {
  profileStudentById: null,
  loading: false,
  error: null,
};

const getProfileStudentByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__PROFILE__STUDENT__ID:
      return { ...state, loading: true, error: null };
    case GET__PROFILE__STUDENT__ID__SUCCESS:
      return { ...state, loading: false, profileStudentById: action.payload };
    case GET__PROFILE__STUDENT__ID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getProfileStudentByIdReducer;
