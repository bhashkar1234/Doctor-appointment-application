const express=require('express')
const router =express.Router();
const authMiddleware=require("../middlewares/authMiddleware");
const { getAllUsersController, getAllDoctorsController, changeAccountStatusController } = require('../controllers/adminCtrl');
//GET METHOD|| USERS
router.get('/getAllUsers',authMiddleware,getAllUsersController)

//get method || doctors
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

//post account status
router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)

module.exports=router;
