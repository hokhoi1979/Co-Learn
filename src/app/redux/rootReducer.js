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
const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  userIdData: getUserIdReducer,

  //Parent
  getAllParent: getAllParentReducer,

  //Teacher
  getAllTeacher: getAllTeacherReducer,
  getProfileTeacher: getProfileTeacherReducer,
  editProfileTeacher: editProfileTeacherReducer,
  getProfileTeacherId: getProfileTeacherIdReducer,

  //Teacher - Course
  createCourseData: createCourseReducer,
  getCourseData: getCourseReducer,
  deleteCourseData: deleteCourseReducer,
  updateCourseData: updateCourseReducer,
  getCourseByIdData: getCourseByIdReducer,

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
