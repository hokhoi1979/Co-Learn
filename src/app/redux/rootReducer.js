import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./auth/loginSlice";
import registerReducer from "./auth/registerSlice";
import getAllParentReducer from "./admin/user/getAllParent/getAllParentSlice";
import getAllTeacherReducer from "./admin/user/getAllTeacher/getAllTeacherSlice";
import getProfileTeacherReducer from "./teacher/profileTeacher/getProfileTeacher/getProfileTeacherSlice";
import editProfileTeacherReducer from "./teacher/profileTeacher/editProfileTeacher/editProfileTeacherSlice";
import getProfileStudentReducer from "./parent/profileStudent/getProfileStudentSlice";
import createCourseReducer from "./teacher/courseTeacher/createCourse/createCourseSlice";
import getCourseReducer from "./teacher/courseTeacher/getCourse/getCourseSlice";
import deleteCourseReducer from "./teacher/courseTeacher/deleteCourse/deleteCourseSlice";
import updateCourseReducer from "./teacher/courseTeacher/updateCourse/updateCourseSlice";
import createMaterialsReducer from "./teacher/materialsTeacher/createMaterials/createMaterialsSlice";
import deleteMaterialsReducer from "./teacher/materialsTeacher/deleteMaterials/deleteMaterialsSlice";
import getMaterialsReducer from "./teacher/materialsTeacher/getMaterials/getMaterialsSlice";
import updateMaterialsReducer from "./teacher/materialsTeacher/updateMaterials/updateMaterialsSlice";
import createLessonReducer from "./teacher/lessonTeacher/createLesson/createLessonSlice";
import deleteLessonReducer from "./teacher/lessonTeacher/deleteLesson/deleteLessonSlice";
import getLessonReducer from "./teacher/lessonTeacher/getLesson/getLessonSlice";
import updateLessonReducer from "./teacher/lessonTeacher/updateLesson/updateLessonSlice";
import getProfileTeacherIdReducer from "./teacher/profileTeacher/getProfileId/getProfileIdSlice";
import getProfileStudentByIdReducer from "./student/profileStudentById/getProfileByIdSlice";
import getEnrollmentReducer from "./student/enrollments/getEnrollmentSlice";
import getCourseStudentReducer from "./student/courseStudent/courseStudentSlice";
import getCourseByIdReducer from "./teacher/courseTeacher/getCourseById/getCourseByIdSlice";
import getUserIdReducer from "./user/getUserID/getUserIDSlice";
import createProfileTeacherReducer from "./teacher/profileTeacher/creatProfileTeacher/createProfileTeacherSlice";
import getProfileParentIdReducer from "./parent/profileParentId/getProfileParentIdSlice";
import createBookingIdReducer from "./parent/booking/createBookingId/createBookingIdSlice";
import getBookingIdReducer from "./parent/booking/getBookingId/getBookingIdSlice";
import getBookingStudentReducer from "./parent/booking/getBookingStudent/getBookingStudentSlice";
import deleteBookingReducer from "./parent/booking/deleteBooking/deleteBookingSlice";
import editBookingReducer from "./parent/booking/editBooking/editBookingSlice";
import getBookingTeacherReducer from "./teacher/booking/getBookingTeacher/getBookingTeacherSlice";
import confirmBookingTeacherReducer from "./teacher/statusBooking/confirmBooking/confirmBookingSlice";
import declineBookingTeacherReducer from "./teacher/statusBooking/declineBooking/declineBookingSlice";
import getCourseTeacherReducer from "./teacher/courseTeacher/getCourseTeacher/getCourseTeacherSlice";
import updateProfileParentReducer from "./parent/updateProfileParent/updateProfileParentSlice";
import postProfileStudentReducer from "./parent/postProfileStudent/postProfileStudentSlice";
import getProfileStudentIdReducer from "./parent/getProfileStudentId/getProfileStudentSlice";
import putProfileStudentReducer from "./parent/putProfileStudent/putProfileStudentSlice";
import postPaymentReducer from "./payment/postPayment/postPaymentSlice";
const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  userIdData: getUserIdReducer,

  //Parent
  getAllParent: getAllParentReducer,
  getProfileParentId: getProfileParentIdReducer,
  updateProfileParent: updateProfileParentReducer,
  postProfileStudent: postProfileStudentReducer,
  getProfileStudentId: getProfileStudentIdReducer,
  putProfileStudent: putProfileStudentReducer,

  //Parent - Booking
  createBookingId: createBookingIdReducer,
  getBookingId: getBookingIdReducer,
  getBookingStudent: getBookingStudentReducer,
  deleteBooking: deleteBookingReducer,
  editBooking: editBookingReducer,

  // Parent - Payment
  postPayment: postPaymentReducer,

  //Teacher
  getAllTeacher: getAllTeacherReducer,
  getProfileTeacher: getProfileTeacherReducer,
  editProfileTeacher: editProfileTeacherReducer,
  getProfileTeacherId: getProfileTeacherIdReducer,
  createProfileTeacherData: createProfileTeacherReducer,

  //Teacher - Booking
  getBookingTeacher: getBookingTeacherReducer,

  //Teacher - Confirm
  confirmBookingTeacher: confirmBookingTeacherReducer,
  declineBookingTeacher: declineBookingTeacherReducer,

  //Teacher - Course
  createCourseData: createCourseReducer,
  getCourseData: getCourseReducer,
  deleteCourseData: deleteCourseReducer,
  updateCourseData: updateCourseReducer,
  getCourseByIdData: getCourseByIdReducer,
  getCourseTeacherData: getCourseTeacherReducer,

  //Teacher - Materials
  createMaterialsData: createMaterialsReducer,
  deleteMaterialsData: deleteMaterialsReducer,
  getMaterialsData: getMaterialsReducer,
  updateMaterialsData: updateMaterialsReducer,

  //Teacher - Lesson
  createLessonData: createLessonReducer,
  deleteLessonData: deleteLessonReducer,
  getLessonData: getLessonReducer,
  updateLessonData: updateLessonReducer,

  //Student
  getProfileStudentData: getProfileStudentReducer,
  getProfileStudentByIdData: getProfileStudentByIdReducer,
  getEnrollmentData: getEnrollmentReducer,
  getCourseStudentData: getCourseStudentReducer,
});

export default rootReducer;
