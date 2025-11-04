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
import watchGetBookingTeacher from "./teacher/booking/getBookingTeacher/getBookingTeacherSaga";
import watchConfirmBookingTeacher from "./teacher/statusBooking/confirmBooking/confirmBookingSaga";
import watchDeclineBookingTeacher from "./teacher/statusBooking/declineBooking/declineBookingSaga";
import watchGetCourseTeacher from "./teacher/courseTeacher/getCourseTeacher/getCourseTeacherSaga";
import watchPutProfileParent from "./parent/updateProfileParent/updateProfileParentSaga";
import watchPostProfileStudent from "./parent/postProfileStudent/postProfileStudentSaga";
import watchGetProfileStudentId from "./parent/getProfileStudentId/getProfileStudentSaga";
import watchPutProfileStudent from "./parent/putProfileStudent/putProfileStudentSaga";
import watchPostPaymentStudent from "./payment/postPayment/postPaymentSaga";
import watchGetPaymentCancel from "./payment/getPaymentCancel/getPaymentCancelSaga";
import watchPostPaymentCourse from "./payment/postPaymentCourse/postPaymentCourseSaga";
import watchGetEnrollmentStudent from "./student/enrollmentStudent/getEnrollmentStudentSaga";
import watchGetScheduleStudent from "./student/getSchedule/getScheduleSaga";
import watchPutMeetingSchedule from "./teacher/meeting/meetingScheduleSaga";
import watchGetScheduleTeacher from "./teacher/scheduleTeacher/getScheduleTeacherSaga";
import watchGetAllUser from "./admin/user/getAllUser/getAllUserSaga";
import watchGetPayment from "./payment/getPayment/getPaymentSaga";
import watchBanUser from "./admin/banUser/banUserSaga";
import watchGetAllTransaction from "./transaction/getAllTransaction/getAllTransactionSaga";
import watchGetTransactionById from "./transaction/getTransactionById/getTransactionById";
import watchGetEarningId from "./report/getEarningById/getEarningByIdSaga";
import watchGetEarning from "./report/getEarning/getEarningSaga";
export default function* rootSaga() {
  yield all([
    watchFetchLogin(),
    watchFetchRegister(),
    watchGetUserId(),
    watchGetAllUser(),

    //Parent
    watchGetAllParent(),
    watchGetProfileParentId(),
    watchPutProfileParent(),
    watchPostProfileStudent(),
    watchGetProfileStudentId(),
    watchPutProfileStudent(),

    //Parent - Booking
    watchCreateBookingId(),
    watchGetBookingId(),
    watchGetBookingStudent(),
    watchDeleteBooking(),
    watchEditBooking(),

    //Parent - Payment
    watchPostPaymentStudent(),
    watchGetPaymentCancel(),
    watchPostPaymentCourse(),
    watchGetPayment(),

    //Teacher
    watchGetAllTeacher(),
    watchGetProfileTeacher(),
    watchEditProfileTeacher(),
    watchGetProfileTeacherId(),
    watchCreateProfileTeacher(),
    watchPutMeetingSchedule(),
    watchGetScheduleTeacher(),

    //Teacher - Booking
    watchGetBookingTeacher(),

    //Teacher - Confirm
    watchConfirmBookingTeacher(),
    watchDeclineBookingTeacher(),

    //Teacher - Course
    watchCreateCourse(),
    watchGetCourse(),
    watchUpdateCourse(),
    watchGetCourseById(),
    watchDeleteCourse(),
    watchGetCourseTeacher(),

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
    watchGetEnrollmentStudent(),
    watchGetCourseStudent(),
    watchGetScheduleStudent(),

    //Admin
    watchBanUser(),

    //Transaction
    watchGetAllTransaction(),
    watchGetTransactionById(),

    //Report
    watchGetEarningId(),
    watchGetEarning(),
  ]);
}
