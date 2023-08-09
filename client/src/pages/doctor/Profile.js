

import React,{useEffect, useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Layout from './../../components/Layout';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import { Col,Form,Input,Row,message,TimePicker } from 'antd';
import { showLoading,hideLoading } from '../../redux/features/alertSlice';
import moment from 'moment';
 // Replace 'path/to/TimePicker' with the correct import path



const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const dispatch=useDispatch();
  const  navigate=useNavigate();
  const params = useParams();
//updatwe doc
const handleFinish = async(values) => {
  // console.log(values);
  try{
    dispatch(showLoading())
    const res = await axios.post('/api/v1/doctor/updateProfile',{...values,userId:user._id,
    timings:[
      moment(values.timings[0]).format("HH:mm"),
      moment(values.timings[1]).format("HH:mm"),
      // values.timings[0].format('HH:mm'),
      //     values.timings[1].format('HH:mm'),

    ]},
    {
      headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
      }
    })
    dispatch(hideLoading())
    if(res.data.success){
      message.success(res.data.success)
      navigate('/')
    }
    else{
      message.error(res.data.success)
    }
  }
  catch(error){
    dispatch(hideLoading());
    console.error(error)
    message.error('something went wrong')
  }
};


  


//getdoctor details
  const getDoctorInfo=async()=>{
    try{
      const res=await axios.post('/api/v1/doctor/getDoctorInfo',{userId:params.id},
      {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
  });
  if(res.data.success){
    setDoctor(res.data.data)
  }
    }
    catch(error){
      console.log(error)
    }
  }
 useEffect(()=>{
  getDoctorInfo();
  //eslint-disable-next-line
 },[]);

  return (
    <Layout>
      {/* <h1>Manage Profile - User ID: {id}</h1> */}
      <h1>manage profile</h1>
      {doctor && (
        <Form layout="vertical" onFinish={handleFinish} className="m-4" initialValues={{
          ...doctor,
          timings:[
            moment(doctor.timings[0],'HH:mm'),
            moment(doctor.timings[1],'HH:mm'),
          ]
        }}>
        <h4 className="text-black">personal details:</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your name" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your last name" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone no"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="number" placeholder="your phone number" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your emailID" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Website"
              name="website"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your website" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your name" />
            </Form.Item>
          </Col>
        </Row>
        
        <h4 className="text-black">professional details:</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your specialization" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your  experience" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="cunsultationfees"
              name="cunsultationfees"
              required
              rules={[{ required: true }]}
            >
              <Input type="number" placeholder="your  cunsultationfees" />
            </Form.Item>
          </Col>

         <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="timings"
              name="timings"
              required>
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
      </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
          <button className="btn btn-primary form-btn"  type="submit">Submit</button>
          </Col>
        </Row>
       
      </Form>
      )}
    </Layout>
  );
};

export default Profile;



