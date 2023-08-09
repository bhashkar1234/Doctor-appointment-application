const express = require("express");
const router=express.Router();
// const {getDoctorInfoController}=require("../controllers/doctorCtrl")
const authMiddleware = require("../middlewares/authMiddleware");
const { getDoctorInfoController,updateProfileController, getDoctorByIdController, doctorAppointmentsController, updateStatusController, } = require("../controllers/doctorCtrl");

//post SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);
//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);
//post get single Doc info
router.post('/getDoctorById',authMiddleware,getDoctorByIdController)
// get appointments
router.get('/doctor-appointments',authMiddleware,doctorAppointmentsController)

//post update status
router.post('/update-status',authMiddleware,updateStatusController)
module.exports=router