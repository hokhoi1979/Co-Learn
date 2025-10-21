export const PUT__MEETING__SCHEDULE = "PUT__MEETING__SCHEDULE";
export const PUT__MEETING__SCHEDULE__SUCCESS =
  "PUT__MEETING__SCHEDULE__SUCCESS";
export const PUT__MEETING__SCHEDULE__FAIL = "PUT__MEETING__SCHEDULE__FAIL";

export const putMeetingSchedule = (data) => ({
  type: PUT__MEETING__SCHEDULE,
  payload: data,
});

export const putMeetingScheduleSuccess = (data) => ({
  type: PUT__MEETING__SCHEDULE__SUCCESS,
  payload: data,
});

export const putMeetingScheduleFail = (error) => ({
  type: PUT__MEETING__SCHEDULE__FAIL,
  payload: error,
});

const initialState = {
  meetingSchedule: null,
  loading: false,
  error: null,
};

const putMeetingScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT__MEETING__SCHEDULE:
      return { ...state, loading: true, error: null };
    case PUT__MEETING__SCHEDULE__SUCCESS:
      return { ...state, loading: false, meetingSchedule: action.payload };
    case PUT__MEETING__SCHEDULE__FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default putMeetingScheduleReducer;
