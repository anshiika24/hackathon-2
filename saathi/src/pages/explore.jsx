// export default function Explore() {
//   const heritageSites = [
//     { name: "Taj Mahal", location: "Agra", description: "A UNESCO World Heritage site." },
//     { name: "Hampi", location: "Karnataka", description: "Ancient ruins and temples." },
//     { name: "Jaipur City Palace", location: "Rajasthan", description: "Historic royal residence." },
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Explore Heritage & Culture 🏛️</h2>
//       <p className="mb-6 text-gray-600">Discover iconic heritage sites and cultural destinations.</p>
//       <div className="grid md:grid-cols-3 gap-4">
//         {heritageSites.map((site, idx) => (
//           <div key={idx} className="bg-white p-4 shadow rounded-lg">
//             <h3 className="text-xl font-semibold">{site.name}</h3>
//             <p className="text-gray-500">{site.location}</p>
//             <p className="text-gray-700 mt-2">{site.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
//         <p className="text-gray-700">📍 Map Integration Coming Soon...</p>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet ke default icon issue ko fix karna zaroori hai
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function Explore() {
    // State banayein data, loading, aur error ke liye
    const [sites, setSites] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Backend se data fetch karein
    useEffect(() => {
        const fetchHeritageSites = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/heritage');
                console.log("Data from backend:", response.data); // Data check karne ke liye
                setSites(response.data); 
            } catch (err) {
                setError('Could not fetch data. Please make sure the backend is running.');
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false); 
            }
        };

        fetchHeritageSites();
    }, []); 

    // Loading state handle karna
    if (loading) {
        return <p className="text-center text-lg mt-10">Loading map and heritage sites...</p>;
    }

    // Error state handle karna
    if (error) {
        return <p className="text-center text-lg mt-10 text-red-500">{error}</p>;
    }

    // Data ko map par display karein
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Explore Heritage & Culture 🗺️</h2>
            <p className="mb-6 text-gray-600 text-center">Discover iconic sites from all over India, loaded directly from your database.</p>
            
            <div className="rounded-lg shadow-lg overflow-hidden" style={{ height: '70vh', width: '100%' }}>
                <MapContainer center={[22.3511148, 78.6677428]} zoom={5} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    
                    {sites.map(site => (
                        <Marker key={site._id} position={[site.latitude, site.longitude]}>
                            <Popup>
                                <div className="w-48">
                                    {site.imageUrl && <img src={site.imageUrl} alt={site.name} className="w-full h-24 object-cover rounded-md" />}
                                    <h3 className="font-bold text-md mt-2">{site.name}</h3>
                                    <p className="text-xs text-gray-600">{site.location}</p>
                                    <p className="text-sm mt-1">{site.description}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Leaflet ke default icon issue ko fix karne ke liye (yeh zaroori hai)
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });


// export default function Explore() {
//     const [sites, setSites] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Backend se data fetch karne ke liye function
//         const fetchHeritageSites = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/heritage');
//                 setSites(response.data);
//             } catch (err) {
//                 setError('Could not fetch data from the server. Please make sure the backend is running.');
//                 console.error("Error fetching data:", err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchHeritageSites();
//     }, []); // Empty array ka matlab hai ki yeh effect sirf ek baar chalega jab component load hoga

//     // Loading state handle karna
//     if (loading) {
//         return <p className="text-center text-lg mt-10">Loading heritage sites from your database...</p>;
//     }

//     // Error state handle karna
//     if (error) {
//         return <p className="text-center text-lg mt-10 text-red-500">{error}</p>;
//     }

//     // Data successfully load hone par yeh UI dikhega
//     return (
//         <div>
//             <h2 className="text-3xl font-bold mb-4 text-center">Explore Heritage & Culture 🗺️</h2>
//             <p className="mb-6 text-gray-600 text-center">Discover iconic sites from all over India, loaded directly from your backend.</p>
            
//             <div className="rounded-lg shadow-lg overflow-hidden">
//                 <MapContainer center={[22.3511148, 78.6677428]} zoom={5} style={{ height: '70vh', width: '100%' }}>
//                     <TileLayer
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     />
                    
//                     {/* Database se aaye hue sites ko map par markers ke roop mein dikhana */}
//                     {sites.map(site => (
//                         <Marker key={site._id} position={[site.latitude, site.longitude]}>
//                             <Popup>
//                                 <div className="w-48">
//                                     <img src={site.imageUrl} alt={site.name} className="w-full h-24 object-cover rounded-md" />
//                                     <h3 className="font-bold text-md mt-2">{site.name}</h3>
//                                     <p className="text-xs text-gray-600">{site.location}</p>
//                                     <p className="text-sm mt-1">{site.description}</p>
//                                 </div>
//                             </Popup>
//                         </Marker>
//                     ))}
//                 </MapContainer>
//             </div>
//         </div>
//     );
// }

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Leaflet ke default icon issue ko fix karna zaroori hai
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// export default function Explore() {
//     // Step 1: State banayein data, loading, aur error ke liye
//     const [sites, setSites] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     // Step 2: Backend se data fetch karein
//     useEffect(() => {
//         const fetchHeritageSites = async () => {
//             try {
//                 // Aapka backend API endpoint
//                 const response = await axios.get('http://localhost:5000/api/heritage');
//                 setSites(response.data); // Data ko state mein set karein
//             } catch (err) {
//                 setError('Could not fetch data. Please make sure the backend is running.');
//                 console.error("Error fetching data:", err);
//             } finally {
//                 setLoading(false); // Loading state ko false karein
//             }
//         };

//         fetchHeritageSites();
//     }, []); // Empty array ka matlab hai ki yeh effect sirf ek baar chalega

//     // Loading state handle karna
//     if (loading) {
//         return <p className="text-center text-lg mt-10">Loading map and heritage sites...</p>;
//     }

//     // Error state handle karna
//     if (error) {
//         return <p className="text-center text-lg mt-10 text-red-500">{error}</p>;
//     }

//     // Step 3: Data ko map par display karein
//     return (
//         <div>
//             <h2 className="text-3xl font-bold mb-4 text-center">Explore Heritage & Culture 🗺️</h2>
//             <p className="mb-6 text-gray-600 text-center">Discover iconic sites from all over India, loaded directly from your database.</p>
            
//             <div className="rounded-lg shadow-lg overflow-hidden" style={{ height: '70vh', width: '100%' }}>
//                 <MapContainer center={[22.3511148, 78.6677428]} zoom={5} style={{ height: '100%', width: '100%' }}>
//                     <TileLayer
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     />
                    
//                     {/* Database se aaye hue sites ko map par markers ke roop mein dikhana */}
//                     {sites.map(site => (
//                         <Marker key={site._id || site.name} position={[site.latitude, site.longitude]}>
//                             <Popup>
//                                 <div className="w-48">
//                                     {site.imageUrl && <img src={site.imageUrl} alt={site.name} className="w-full h-24 object-cover rounded-md" />}
//                                     <h3 className="font-bold text-md mt-2">{site.name}</h3>
//                                     <p className="text-xs text-gray-600">{site.location}</p>
//                                     <p className="text-sm mt-1">{site.description}</p>
//                                 </div>
//                             </Popup>
//                         </Marker>
//                     ))}
//                 </MapContainer>
//             </div>
//         </div>
//     );
// }