const appointmentModel = require("../models/appointmentModel");
const doctorModel = require("../models/doctorModel");
const userModel = require("../models/userModels");
const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "doctor data fetch success",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching Doctor Details",
    });
  }
};

// update doc profile
const updateProfileController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Doctor Profile Updated",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Doctor Profile Update issue",
      error,
    });
  }
};
//get single doctor
const getDoctorByIdController=async(req,res)=>{
try{
  const doctor =await doctorModel.findOne({_id:req.body.doctorId})
  res.status(200).send({
    success:true,
    message:'single doc info fetched',
    data:doctor
  });
}
catch(error)
{
  console.log(error)
  res.status(500).send({
    success:false,
    error,
    message:'Error in single info',
  })
}


}

const doctorAppointmentsController=async(req,res)=>{
  try{
    const doctor= await doctorModel.findOne({userId:req.body.userId})
    const appointments=await appointmentModel.find({doctorId:doctor._id,});
    res.status(200).send({
      success:true,
      message:"doctor appointmen fetch successfully",
      data:appointments,
    })
  }
  catch(error)
  {
    console.log(error);
    res.status(500).send({
      success:false,
      error,
      message:'error in doc appointments'
    })
  }
}


const updateStatusController=async(req,res)=>{
 try{
  const {appointmentsId,status}=req.body;
  const appointments=await appointmentModel.findByIdAndUpdate(appointmentsId,{status})
  const user = await userModel.findOne({ _id:appointments.userId }); //i have maked a change .doctorInfo dala hai
    const notification=user.notification;
      notification.push({
      type: "status-updated",
      message: `your appointment has been updated ${status}`,
      onClickpath: "/doctor-appointments",
    });
    user.notification = notification;
    await user.save();
    res.status(200).send({
      success:true,
      message:'appointment status updated',
    });
 }
 catch(error){
  console.log(error);
  res.status(500).send({
     success:false,
     error,
     message:'error in update status',
  })
 }
}

module.exports = { getDoctorInfoController, updateProfileController,getDoctorByIdController,doctorAppointmentsController,updateStatusController };