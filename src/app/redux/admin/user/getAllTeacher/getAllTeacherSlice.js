export const GET__ALL__TEACHER = "GET__ALL__TEACHER";
export const GET__ALL__TEACHER__SUCCESS = "GET__ALL__TEACHER__SUCCESS";
export const GET__ALL__TEACHER__FAIL = "GET__ALL__TEACHER__FAIL";

export const getAllTeacher = (data) => ({
  type: GET__ALL__TEACHER,
  payload: data,
});

export const getAllTeacherSuccess = (data) => ({
  type: GET__ALL__TEACHER__SUCCESS,
  payload: data,
});

export const getAllTeacherFail = (error) => ({
  type: GET__ALL__TEACHER__FAIL,
  payload: error,
});

const initialState = {
  allTeacher: null,
  loading: false,
  error: null,
};

const getAllTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__ALL__TEACHER:
      return { ...state, loading: true, error: null };
    case GET__ALL__TEACHER__SUCCESS:
      return { ...state, loading: false, allTeacher: action.payload };
    case GET__ALL__TEACHER__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getAllTeacherReducer;
