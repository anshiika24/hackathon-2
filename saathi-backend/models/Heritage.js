// // // import mongoose from 'mongoose';

// // // const heritageSchema = new mongoose.Schema({
// // //     name: { type: String, required: true },
// // //     location: { type: String, required: true },
// // //     description: { type: String },
// // //     latitude: { type: Number, required: true },
// // //     longitude: { type: Number, required: true },
// // // });

// // // const Heritage = mongoose.model('Heritage', heritageSchema);
// // // export default Heritage;
// // // models/Heritage.js

// // // import mongoose from 'mongoose';

// // // const heritageSchema = new mongoose.Schema({
// // //     name: { type: String, required: true },
// // //     location: { type: String, required: true },
// // //     description: { type: String },
// // //     latitude: { type: Number, required: true },
// // //     longitude: { type: Number, required: true },
// // //     imageUrl: { type: String } // <-- YEH NAYI LINE ADD KAREIN
// // // });

// // // const Heritage = mongoose.model('Heritage', heritageSchema);
// // // export default Heritage;
// // const mongoose = require('mongoose');

// // const heritageSchema = new mongoose.Schema(
// //   {
// //     name: String,
// //     location: String,
// //     description: String,
// //     latitude: Number,
// //     longitude: Number,
// //     imageUrl: String,
// //     type: String
// //   },
// //   {
// //     // YEH LINE SABSE ZAROORI HAI
// //     collection: 'heritageSites' 
// //   }
// // );

// // module.exports = mongoose.model('HeritageSite', heritageSchema);
// import mongoose from 'mongoose'; // Yeh import bhi zaroori hai

// const heritageSchema = new mongoose.Schema(
//   {
//     name: String,
//     location: String,
//     description: String,
//     latitude: Number,
//     longitude: Number,
//     imageUrl: String,
//     type: String
//   },
//   {
//     collection: 'heritageSites'
//   }
// );

// // Yeh do lines aakhri mein honi chahiye
// const Heritage = mongoose.model('HeritageSite', heritageSchema);
// export default Heritage;
import mongoose from 'mongoose';

const heritageSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    description: String,
    latitude: Number,
    longitude: Number,
    imageUrl: String,
    type: String
  },
  {
    collection: 'heritageSites' // Collection ka naam saaf-saaf bataya gaya hai
  }
);

const Heritage = mongoose.model('HeritageSite', heritageSchema);

export default Heritage;