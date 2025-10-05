import { all } from "redux-saga/effects";
import watchFetchRegister from "./auth/registerSaga";
import watchFetchLogin from "./auth/loginSaga";
import watchGetAllParent from "./admin/user/getAllParent/getAllParentSaga";
import watchGetAllTeacher from "./admin/user/getAllTeacher/getAllTeacherSaga";
import watchGetProfileTeacher from "./teacher/profileTeacher/getProfileTeacher/getProfileTeacherSaga";
import watchGetProfileStudent from "./parent/profileStudent/getProfileStudentSaga";
import watchEditProfileTeacher from "./teacher/profileTeacher/editProfileTeacher/editProfileTeacherSaga";
import watchCreateCourse from "./teacher/courseTeacher/createCourse/createCourseSaga";
import watchUpdateCourse from "./teacher/courseTeacher/updateCourse/updateCourseSaga";
import watchCreateMaterials from "./teacher/materialsTeacher/createMaterials/createMaterialsSaga";
import watchDeleteMaterials from "./teacher/materialsTeacher/deleteMaterials/deleteMaterialsSaga";
import watchGetMaterials from "./teacher/materialsTeacher/getMaterials/getMaterialsSaga";
import watchUpdateMaterials from "./teacher/materialsTeacher/updateMaterials/updateMaterialsSaga";
import watchGetCourseById from "./teacher/courseTeacher/getCourseById/getCourseByIdSaga";
import watchDeleteCourse from "./teacher/courseTeacher/deleteCourse/deleteCourseSaga";
import watchGetCourse from "./teacher/courseTeacher/getCourse/getCourseSaga";
import watchCreateLesson from "./teacher/lessonTeacher/createLesson/createLessonSaga";
import watchDeleteLesson from "./teacher/lessonTeacher/deleteLesson/deleteLessonSaga";
import watchGetLesson from "./teacher/lessonTeacher/getLesson/getLessonSaga";
import watchUpdateLesson from "./teacher/lessonTeacher/updateLesson/updateLessonSaga";
import watchGetProfileTeacherId from "./teacher/profileTeacher/getProfileId/getProfileIdSaga";
import watchGetProfileStudentById from "./student/profileStudentById/getProfileByIdSaga";
import watchGetEnrollment from "./student/enrollments/getEnrollmentSaga";
import watchGetCourseStudent from "./student/courseStudent/courseStudentSaga";
import watchGetUserId from "./user/getUserID/getUserIDSaga";
import watchCreateProfileTeacher from "./teacher/profileTeacher/creatProfileTeacher/createProfileTeacherSaga";
import watchGetProfileParentId from "./parent/profileParentId/getProfileParentIdSaga";
import watchCreateBookingId from "./parent/booking/createBookingId/createBookingIdSaga";
import watchGetBookingId from "./parent/booking/getBookingId/getBookingIdSaga";
import watchGetBookingStudent from "./parent/booking/getBookingStudent/getBookingStudent";
import watchDeleteBooking from "./parent/booking/deleteBooking/deleteBookingSaga";
import watchEditBooking from "./parent/booking/editBooking/editBookingSaga";
export default function* rootSaga() {
  yield all([
    watchFetchLogin(),
    watchFetchRegister(),
    watchGetUserId(),

    //Parent
    watchGetAllParent(),
    watchGetProfileParentId(),

    //Parent - Booking
    watchCreateBookingId(),
    watchGetBookingId(),
    watchGetBookingStudent(),
    watchDeleteBooking(),
    watchEditBooking(),

    //Teacher
    watchGetAllTeacher(),
    watchGetProfileTeacher(),
    watchEditProfileTeacher(),
    watchGetProfileTeacherId(),
    watchCreateProfileTeacher(),

    //Teacher - Course
    watchCreateCourse(),
    watchGetCourse(),
    watchUpdateCourse(),
    watchGetCourseById(),
    watchDeleteCourse(),

    //Teacher - Materials
    watchCreateMaterials(),
    watchDeleteMaterials(),
    watchGetMaterials(),
    watchUpdateMaterials(),

    //Teacher - Lesson
    watchCreateLesson(),
    watchDeleteLesson(),
    watchGetLesson(),
    watchUpdateLesson(),

    //Student
    watchGetProfileStudent(),
    watchGetProfileStudentById(),
    watchGetEnrollment(),
    watchGetCourseStudent(),
  ]);
}
