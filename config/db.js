
const mongoose = require('mongoose');


const connectDB=async()=>{
    try{
await mongoose.connect(process.env.MONGO_URL)

 console.log(`mongodb connected ${mongoose.connection.host}`);
    } catch(error){
       console.log(`mongodb server issue ${error}`); 
    }
}
module.exports=connectDB;

// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://gofood:Sainath123@cluster0.ddiobl4.mongodb.net/doctorap', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`mongodb connected ${mongoose.connection.host}`);
//   } catch (error) {
//     console.log(`mongodb server issue ${error}`);
//   }
// };

// module.exports = connectDB;

