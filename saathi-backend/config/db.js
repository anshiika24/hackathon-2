// // config/db.js
// import mongoose from 'mongoose';

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("MongoDB connection SUCCESS");
//     } catch (error) {
//         console.error("MongoDB connection FAIL");
//         process.exit(1);
//     }
// };

// export default connectDB;
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection FAIL: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;