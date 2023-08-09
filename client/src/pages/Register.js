import React from "react";
import {Form,Input,message} from "antd";
import "../styles/RegisterStyles.css";
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../redux/features/alertSlice";




export default function Register() {
const navigate=useNavigate()
  const dispatch=useDispatch()
  const onfinishHandler = async (values) => {
    try{
      dispatch(showLoading())
     const res=await axios.post('/api/v1/user/register',values);
     dispatch(hideLoading())
     
     if(res.data.success)
     {
      message.success('register success fully')
      navigate('/login')
     }
     else {
      message.error(res.data.message)
     }
    }
    catch(error){
      dispatch(showLoading()) 
 console.log(error)
 message.error('something went wrong')
    }
  };
  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="register-form">
          <h1 className="text-center">Register Form</h1>
        <Form.Item label="Name" name="name">
            <Input type="text" required/>
          </Form.Item>
          <Form.Item label="Email" name="email">
          <Input type="email" required/>
        </Form.Item>
        <Form.Item label="Password" name="password">
        <Input type="password" required/>
      </Form.Item>
      <Link to="/login" className="ms-2">alreeady an user</Link>
    <button className="btn btn-primary">Register</button>
        </Form>
      </div>
    </>
  );
}
