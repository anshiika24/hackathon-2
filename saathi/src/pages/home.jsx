// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="text-center mt-8">
//       <h2 className="text-3xl font-bold mb-4">Welcome to Saathi 👣</h2>
//       <p className="text-lg text-gray-600 mb-8">
//         Discover culture, explore heritage, and travel safely — all in one place.
//       </p>
//       <div className="flex flex-wrap justify-center gap-4">
//         <Link to="/explore" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
//           Explore Heritage
//         </Link>
//         <Link to="/safety" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
//           Women Safety
//         </Link>
//         <Link to="/emergency" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
//           Emergency Help
//         </Link>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div 
            className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1932&auto=format&fit=crop')" }}
        >
            {/* Overlay to make text more readable */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 text-center p-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
                    Welcome to Saathi
                </h1>
                <p className="text-lg md:text-2xl mb-8 animate-fade-in-up">
                    Discover India's rich culture, heritage, and travel safely — all in one place.
                </p>
                <div className="space-x-4">
                    <Link to="/explore">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
                            Explore Heritage
                        </button>
                    </Link>
                    <Link to="/safety">
                         <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-transform transform hover:scale-105 shadow-lg">
                            Women Safety
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
