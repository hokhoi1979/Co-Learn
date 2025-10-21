export const LOGIN__API = "LOGIN__API";
export const LOGIN__API__SUCCESS = "LOGIN__API__SUCCESS";
export const LOGIN__API__FAIL = "LOGIN__API__FAIL";
export const LOG__OUT = "LOG__OUT";
export const loginApi = (data) => ({
  type: LOGIN__API,
  payload: data,
});

export const loginApiSuccess = (data) => ({
  type: LOGIN__API__SUCCESS,
  payload: data,
});

export const loginApiFail = (error) => ({
  type: LOGIN__API__FAIL,
  payload: error,
});

export const logout = () => {
  localStorage.removeItem("auth");
  return {
    type: LOG__OUT,
  };
};

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN__API:
      return { ...state, loading: true, error: null };
    case LOGIN__API__SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGIN__API__FAIL:
      return { ...state, loading: false, error: action.payload };

    case LOG__OUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default loginReducer;
