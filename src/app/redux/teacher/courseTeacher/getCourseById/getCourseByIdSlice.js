export const GET__COURSE__ID = "GET__COURSE__ID";
export const GET__COURSE__ID__SUCCESS = "GET__COURSE__ID__SUCCESS";
export const GET__COURSE__ID__FAIL = "GET__COURSE__ID__FAIL";

export const getCourseById = (data) => ({
  type: GET__COURSE__ID,
  payload: data,
});

export const getCourseByIdSuccess = (data) => ({
  type: GET__COURSE__ID__SUCCESS,
  payload: data,
});

export const getCourseByIdFail = (error) => ({
  type: GET__COURSE__ID__FAIL,
  payload: error,
});

const initialState = {
  courseById: null,
  loading: false,
  error: null,
};

const getCourseByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__COURSE__ID:
      return { ...state, loading: true, error: null };
    case GET__COURSE__ID__SUCCESS:
      return { ...state, loading: false, courseById: action.payload };
    case GET__COURSE__ID__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getCourseByIdReducer;
