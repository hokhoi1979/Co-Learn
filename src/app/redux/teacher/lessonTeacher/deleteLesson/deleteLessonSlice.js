export const DELETE__LESSON = "DELETE__LESSON";
export const DELETE__LESSON__SUCCESS = "DELETE__LESSON__SUCCESS";
export const DELETE__LESSON__FAIL = "DELETE__LESSON__FAIL";

export const deleteLesson = (data) => ({
  type: DELETE__LESSON,
  payload: data,
});

export const deleteLessonSuccess = (data) => ({
  type: DELETE__LESSON__SUCCESS,
  payload: data,
});
export const deleteLessonFail = (error) => ({
  type: DELETE__LESSON__FAIL,
  payload: error,
});

const initialState = {
  deleteLesson: null,
  loading: false,
  error: null,
};

const deleteLessonReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE__LESSON:
      return { ...state, loading: true, error: null };
    case DELETE__LESSON__SUCCESS:
      return { ...state, loading: false, deleteLesson: action.payload };
    case DELETE__LESSON__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default deleteLessonReducer;
