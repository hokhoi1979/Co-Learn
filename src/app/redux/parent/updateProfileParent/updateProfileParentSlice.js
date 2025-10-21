export const UPDATE__PROFILE__PARENT = "UPDATE__PROFILE__PARENT";
export const UPDATE__PROFILE__PARENT__SUCCESS =
  "UPDATE__PROFILE__PARENT__SUCCESS";
export const UPDATE__PROFILE__PARENT__FAIL = "UPDATE__PROFILE__PARENT__FAIL";

export const updateProfileParent = (data) => ({
  type: UPDATE__PROFILE__PARENT,
  payload: data,
});

export const updateProfileParentSuccess = (data) => ({
  type: UPDATE__PROFILE__PARENT__SUCCESS,
  payload: data,
});

export const updateProfileParentFail = (error) => ({
  type: UPDATE__PROFILE__PARENT__FAIL,
  payload: error,
});

const initialState = {
  putProfileParent: null,
  loading: false,
  error: null,
};

const updateProfileParentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE__PROFILE__PARENT:
      return { ...state, loading: true, error: null };
    case UPDATE__PROFILE__PARENT__SUCCESS:
      return { ...state, loading: false, putProfileParent: action.payload };
    case UPDATE__PROFILE__PARENT__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default updateProfileParentReducer;
