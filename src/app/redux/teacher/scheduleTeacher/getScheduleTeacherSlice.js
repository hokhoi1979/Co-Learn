export const GET__SCHEDULE__TEACHER = "GET__SCHEDULE__TEACHER";
export const GET__SCHEDULE__TEACHER__SUCCESS =
  "GET__SCHEDULE__TEACHER__SUCCESS";
export const GET__SCHEDULE__TEACHER__FAIL = "GET__SCHEDULE__TEACHER__FAIL";

export const getScheduleTeacher = (data) => ({
  type: GET__SCHEDULE__TEACHER,
  payload: data,
});

export const getScheduleTeacherSuccess = (data) => ({
  type: GET__SCHEDULE__TEACHER__SUCCESS,
  payload: data,
});

export const getScheduleTeacherFail = (error) => ({
  type: GET__SCHEDULE__TEACHER__FAIL,
  payload: error,
});

const initialState = {
  scheduleTeacher: null,
  loading: false,
  error: null,
};

const getScheduleTeacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET__SCHEDULE__TEACHER:
      return { ...state, loading: true, error: null };
    case GET__SCHEDULE__TEACHER__SUCCESS:
      return { ...state, loading: false, scheduleTeacher: action.payload };
    case GET__SCHEDULE__TEACHER__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getScheduleTeacherReducer;
