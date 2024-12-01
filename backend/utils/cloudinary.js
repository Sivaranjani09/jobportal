import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Log the environment variables to ensure they are being loaded
// console.log("Cloudinary Config:");
// console.log("CLOUD_NAME:", process.env.CLOUD_NAME || "CLOUD_NAME not set");
// console.log("API_KEY:", process.env.API_KEY || "API_KEY not set");
// console.log("API_SECRET:", process.env.API_SECRET || "API_SECRET not set");


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

export default cloudinary;




//import {v2 as cloudinary} from "cloudinary";
// import dotenv from "dotenv";
// dotenv.config();

// cloudinary.config({
//         cloud_name:process.env.CLOUD_NAME,
//         api_key:process.env.API_KEY,
//         api_secret:process.env.API_SECRET
//     });
// export default cloudinary;
