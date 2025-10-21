export const GET__LESSON = "GET__LESSON";
export const GET__LESSON__SUCCESS = "GET__LESSON__SUCCESS";
export const GET__LESSON__FAIL = "GET__LESSON__FAIL";

export const getLesson = (data) => ({
  type: GET__LESSON,
  payload: data,
});

export const getLessonSuccess = (data) => ({
  type: GET__LESSON__SUCCESS,
  payload: data,
});
export const getLessonFail = (error) => ({
  type: GET__LESSON__FAIL,
  payload: error,
});

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const getLessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__LESSON:
      return { ...state, loading: true, error: null };
    case GET__LESSON__SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case GET__LESSON__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getLessonReducer;
