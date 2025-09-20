export const GET__PROFILE__PARENT = "GET__PROFILE__PARENT";
export const GET__PROFILE__PARENT__SUCCESS = "GET__PROFILE__PARENT__SUCCESS";
export const GET__PROFILE__PARENT__FAIL = "GET__PROFILE__PARENT__FAIL";

export const getProfileParent = (data) => ({
  type: GET__PROFILE__PARENT,
  payload: data,
});

export const getProfileParentSuccess = (data) => ({
  type: GET__PROFILE__PARENT__SUCCESS,
  payload: data,
});

export const getProfileParentFail = (error) => ({
  type: GET__PROFILE__PARENT__FAIL,
  payload: error,
});

const initialState = {
  profileParent: null,
  loading: false,
  error: null,
};

const getProfileParentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__PROFILE__PARENT:
      return { ...state, loading: true, error: null };
    case GET__PROFILE__PARENT__SUCCESS:
      return { ...state, loading: false, profileParent: action.payload };
    case GET__PROFILE__PARENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getProfileParentReducer;
