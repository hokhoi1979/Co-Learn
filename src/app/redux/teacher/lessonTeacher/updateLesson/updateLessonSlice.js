export const UPDATE__LESSON = "UPDATE__LESSON";
export const UPDATE__LESSON__SUCCESS = "UPDATE__LESSON__SUCCESS";
export const UPDATE__LESSON__FAIL = "UPDATE__LESSON__FAIL";

export const updateLesson = (data) => ({
  type: UPDATE__LESSON,
  payload: data,
});

export const updateLessonSuccess = (data) => ({
  type: UPDATE__LESSON__SUCCESS,
  payload: data,
});
export const updateLessonFail = (error) => ({
  type: UPDATE__LESSON__FAIL,
  payload: error,
});

const initialState = {
  updateLesson: null,
  loading: false,
  error: null,
};

const updateLessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE__LESSON:
      return { ...state, loading: true, error: null };
    case UPDATE__LESSON__SUCCESS:
      return { ...state, loading: false, updateLesson: action.payload };
    case UPDATE__LESSON__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default updateLessonReducer;
