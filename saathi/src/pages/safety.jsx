// import { useState } from "react";

// export default function Safety() {
//   const [alertSent, setAlertSent] = useState(false);

//   const sendSOS = () => {
//     setAlertSent(true);
//     setTimeout(() => setAlertSent(false), 3000);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Women Safety Center 🛡️</h2>
//       <p className="mb-6 text-gray-600">Stay aware, stay safe. Use our tools to travel confidently.</p>

//       <div className="text-center">
//         <button
//           onClick={sendSOS}
//           className="bg-red-600 text-white text-xl px-10 py-4 rounded-full hover:bg-red-700 transition"
//         >
//           🚨 Send SOS Alert
//         </button>
//         {alertSent && <p className="mt-4 text-green-600 font-semibold">✅ SOS Sent to Emergency Contacts!</p>}
//       </div>

//       <div className="mt-8 bg-white p-4 rounded-lg shadow">
//         <h3 className="text-xl font-semibold mb-2">Safety Tips:</h3>
//         <ul className="list-disc ml-6 text-gray-700 space-y-2">
//           <li>Share your live location with trusted contacts.</li>
//           <li>Avoid poorly lit or isolated areas at night.</li>
//           <li>Keep emergency numbers saved and accessible.</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// {policeStation && (
//     <div className="mt-8 p-6 bg-white shadow-lg rounded-lg text-left">
//         <h3 className="text-2xl font-bold mb-4 text-red-600">EMERGENCY: DIAL 112 IMMEDIATELY</h3>
        
//         {/* Dial 112 Button */}
//         <a 
//             href="tel:112" 
//             className="w-full block bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-center text-xl mb-6"
//         >
//             CLICK HERE TO DIAL 112
//         </a>

//         <p className="text-sm text-gray-500 mb-4 text-center">
//             This is a helper tool. Always call 112 directly in a real emergency.
//         </p>

//         {/* Baaki jaankari jaise Nearest Police Station, Live Location etc. */}
        
//     </div>
// )}
// Safety.jsx component ke andar

// return (
//     <div className="p-8 max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">Emergency SOS 🆘</h2>
//         <p className="mb-8 text-gray-600">
//             In case of an emergency, press the SOS button below. We will find your current location and the nearest police station for you.
//         </p>

//         {/* SOS Button */}
//         <button
//             onClick={handleSOSClick}
//             disabled={loading}
//             className="bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-red-700 ..."
//         >
//             {loading ? 'Accessing Location...' : 'PRESS FOR SOS'}
//         </button>

//         {/* Error message ke liye jagah */}
//         {error && <p className="mt-4 text-red-500">{error}</p>}


//         {/* ====================================================== */}
//         {/* vvv YEH AAPKA SCREEENSHOT WAALA CODE HAI vvv */}
//         {/* ====================================================== */}
//         {policeStation && (
//             <div className="mt-8 p-6 bg-white shadow-lg rounded-lg text-left">
//                 <h3 className="text-2xl font-bold mb-4 text-red-600">EMERGENCY: DIAL 112 IMMEDIATELY</h3>
                
//                 {/* Dial 112 Button */}
//                 <a 
//                     href="tel:112" 
//                     className="w-full block bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-center text-xl mb-6"
//                 >
//                     CLICK HERE TO DIAL 112
//                 </a>

//                 <p className="text-sm text-gray-500 mb-4 text-center">
//                     This is a helper tool. Always call 112 directly in a real emergency.
//                 </p>

//                 {/* Yahaan par aap user ki location aur police station ki details bhi dikha sakti hain */}
                
//             </div>
//         )}
//         {/* ^^^ YAHAN TAK ^^^ */}

//     </div>
// );

import React, { useState } from 'react';

export default function Safety() {
    const [location, setLocation] = useState(null);
    const [policeStation, setPoliceStation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSOSClick = () => {
        setLoading(true);
        setError('');
        setPoliceStation(null);

        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser.');
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const userLocation = { lat: latitude, lon: longitude };
                setLocation(userLocation);

                try {
                    // Dummy Police Station Data for demonstration
                    setTimeout(() => {
                        setPoliceStation({
                            name: "Connaught Place Police Station",
                            address: "Connaught Place, New Delhi, Delhi 110001",
                            phone: "011-23456789",
                        });
                        setLoading(false);
                    }, 2000); 

                } catch (err) {
                    setError('Could not find the nearest police station.');
                    setLoading(false);
                }
            },
            (err) => {
                setError('Unable to retrieve your location. Please grant permission.');
                setLoading(false);
            }
        );
    };

    return (
        <div className="p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Emergency SOS 🆘</h2>
            <p className="mb-8 text-gray-600">
                In case of an emergency, press the SOS button below. This tool will help you gather emergency information quickly.
            </p>

            <button
                onClick={handleSOSClick}
                disabled={loading}
                className="bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105 disabled:bg-gray-400"
            >
                {loading ? 'Accessing Location...' : 'PRESS FOR SOS'}
            </button>

            {error && <p className="mt-4 text-red-500">{error}</p>}

            {policeStation && (
                <div className="mt-8 p-6 bg-white shadow-lg rounded-lg text-left">
                    <h3 className="text-2xl font-bold mb-4 text-red-600">EMERGENCY: DIAL 112 IMMEDIATELY</h3>
                    
                    <a 
                        href="tel:112" 
                        className="w-full block bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-center text-xl mb-6 hover:bg-red-700"
                    >
                        CLICK HERE TO DIAL 112
                    </a>

                    <p className="text-sm text-gray-500 mb-4 text-center">
                        This is a helper tool. Always call 112 directly in a real emergency.
                    </p>

                    <div className="mb-4">
                        <h4 className="font-semibold text-lg">Your Live Location:</h4>
                        <p className="text-gray-700">{`Latitude: ${location.lat}, Longitude: ${location.lon}`}</p>
                        <a href={`https://www.google.com/maps?q=${location.lat},${location.lon}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            View on Google Maps
                        </a>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-semibold text-lg">Nearest Police Station:</h4>
                        <p className="text-gray-700 font-bold">{policeStation.name}</p>
                        <p className="text-gray-700">{policeStation.address}</p>
                        <p className="text-gray-700">Phone: <a href={`tel:${policeStation.phone}`} className="text-blue-500">{policeStation.phone}</a></p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg">Distress Message (Copy & Send):</h4>
                        <div className="p-3 bg-gray-100 rounded-md mt-2">
                            <p className="text-gray-800">
                                I am in an emergency. My current location is approximately here: 
                                {` https://www.google.com/maps?q=${location.lat},${location.lon} `}
                                Please help!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}