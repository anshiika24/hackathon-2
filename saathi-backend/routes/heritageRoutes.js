// import express from 'express';
// import Heritage from '../models/Heritage.js';
// const router = express.Router();

// // ----------------------------------------------------
// // ROUTE 1: Saare heritage sites ko fetch karna
// // URL: GET /api/heritage
// // ----------------------------------------------------
// router.get('/', async (req, res) => {
//     try {
//         const sites = await Heritage.find({});
//         res.json(sites);
//     } catch (error) {
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// // ----------------------------------------------------
// // ROUTE 2: Sirf ek site ko uski ID se fetch karna (Naya Feature)
// // URL: GET /api/heritage/:id (jaise /api/heritage/68e2ad9...)
// // ----------------------------------------------------
// router.get('/:id', async (req, res) => {
//     try {
//         const site = await Heritage.findById(req.params.id);

//         if (site) {
//             res.json(site);
//         } else {
//             res.status(404).json({ message: 'Heritage site not found' });
//         }
//     } catch (error) {
//         res.status(500).json({ message: 'Server Error' });
//     }
// });

// export default router;
// import mongoose from 'mongoose';

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
//     collection: 'heritageSites' // Collection ka naam saaf-saaf bataya gaya hai
//   }
// );

// const Heritage = mongoose.model('HeritageSite', heritageSchema);

// export default Heritage;

import express from 'express';
import Heritage from '../models/Heritage.js';
const router = express.Router();

// Route 1: Saare heritage sites ko fetch karna
router.get('/', async (req, res) => {
    try {
        const sites = await Heritage.find({});
        res.json(sites);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Route 2: Sirf ek site ko uski ID se fetch karna
router.get('/:id', async (req, res) => {
    try {
        const site = await Heritage.findById(req.params.id);

        if (site) {
            res.json(site);
        } else {
            res.status(404).json({ message: 'Heritage site not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;