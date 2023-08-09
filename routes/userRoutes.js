const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,

} = require("../controllers/userCtrl");
const authMiddleware=require("../middlewares/authMiddleware");
//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);
//auth ||POST
router.post('/getUserData',authMiddleware,authController);
module.exports = router;
//apply-doctor  post
router.post('/apply-doctor',authMiddleware,applyDoctorController);
module.exports = router;

//apply-doctor  post
router.post('/get-all-notification',authMiddleware,getAllNotificationController);


router.post('/delete-all-notification',authMiddleware,deleteAllNotificationController);
//get all doc
router.get('/getAllDoctors',authMiddleware,getAllDocotrsController)

//book appointment 
router.post('/book-appointment',authMiddleware,bookeAppointmnetController)

//book availability
router.post('/booking-availbility',authMiddleware,bookingAvailabilityController)

//appointment list 
router.get('/user-appointments',authMiddleware,userAppointmentsController)

module.exports = router;