export const LOGIN__API = "LOGIN__API";
export const LOGIN_API_SUCCESS = "LOGIN_API_SUCCESS";
export const LOGIN_API_FAIL = "LOGIN_API_FAIL";
export const LOG_OUT = "LOG_OUT";

export const loginApi = (data) => ({
  type: LOGIN__API,
  payload: data,
});

export const loginApiSuccess = (data) => ({
  type: LOGIN_API_SUCCESS,
  payload: data,
});

export const loginApiFail = (error) => ({
  type: LOGIN_API_FAIL,
  payload: error,
});

export const logout = () => ({
  type: LOG_OUT,
});

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
    case LOGIN_API_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGIN_API_FAIL:
      return { ...state, loading: false, error: action.payload };
    case LOG_OUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default loginReducer;
