export const CREATE__LESSON = "CREATE__LESSON";
export const CREATE__LESSON__SUCCESS = "CREATE__LESSON__SUCCESS";
export const CREATE__LESSON__FAIL = "CREATE__LESSON__FAIL";

export const createLesson = (data) => ({
  type: CREATE__LESSON,
  payload: data,
});

export const createLessonSuccess = (data) => ({
  type: CREATE__LESSON__SUCCESS,
  payload: data,
});
export const createLessonFail = (error) => ({
  type: CREATE__LESSON__FAIL,
  payload: error,
});

const initialState = {
  createLesson: null,
  loading: false,
  error: null,
};

const createLessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE__LESSON:
      return { ...state, loading: true, error: null };
    case CREATE__LESSON__SUCCESS:
      return { ...state, loading: false, createLesson: action.payload };
    case CREATE__LESSON__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default createLessonReducer;
