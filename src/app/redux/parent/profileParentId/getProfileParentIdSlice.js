export const GET__PROFILE__PARENT__ID = "GET__PROFILE__PARENT__ID";
export const GET__PROFILE__PARENT__ID__SUCCESS =
  "GET__PROFILE__PARENT__ID__SUCCESS";
export const GET__PROFILE__PARENT__ID__FAIL = "GET__PROFILE__PARENT__ID__FAIL";

export const getProfileParentId = (data) => ({
  type: GET__PROFILE__PARENT__ID,
  payload: data,
});

export const getProfileParentIdSuccess = (data) => ({
  type: GET__PROFILE__PARENT__ID__SUCCESS,
  payload: data,
});

export const getProfileParentIdFail = (error) => ({
  type: GET__PROFILE__PARENT__ID__FAIL,
  payload: error,
});

const initialState = {
  profileParentId: null,
  loading: false,
  error: null,
};

const getProfileParentIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__PROFILE__PARENT__ID:
      return { ...state, loading: true, error: null };
    case GET__PROFILE__PARENT__ID__SUCCESS:
      return { ...state, loading: false, profileParentId: action.payload };
    case GET__PROFILE__PARENT__ID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getProfileParentIdReducer;
