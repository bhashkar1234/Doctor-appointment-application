// dotenv config
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();


  
connectDB();
// rest of your code


const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

// routes

// app.get('/', (req, res) => {
//   res.status(200).send({
//     message: "server running"
//   });
// });
 
app.use('/v1/api/user',require("./routes/userRoutes"));
app.use("/v1/api/admin",require("./routes/adminRoutes"));
app.use("/v1/api/doctor",require("./routes/doctorRoutes"));




// listen
const port = process.env.PORT || 8000
app.listen(port,()=>{console.log(`server starting  ${port}`)})
