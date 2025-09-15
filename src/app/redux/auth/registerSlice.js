export const REGISTER__API = "REGISTER__API";
export const REGISTER__API__SUCCESS = "REGISTER__API__SUCCESS";
export const REGISTER__API__FAIL = "REGISTER__API__FAIL";

export const registerApi = (data) => ({
  type: REGISTER__API,
  payload: data,
});

export const registerApiSuccess = (data) => ({
  type: REGISTER__API__SUCCESS,
  payload: data,
});

export const registerApiFail = (error) => ({
  type: REGISTER__API__FAIL,
  payload: error,
});

const initialState = {
  accountRegister: null,
  token: null,
  loading: false,
  error: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER__API:
      return { ...state, loading: true, error: null };
    case REGISTER__API__SUCCESS:
      return {
        ...state,
        loading: false,
        accountRegister: action.payload.user,
        token: action.payload.token,
      };
    case REGISTER__API__FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default registerReducer;
