export default function Explore() {
  const heritageSites = [
    { name: "Taj Mahal", location: "Agra", description: "A UNESCO World Heritage site." },
    { name: "Hampi", location: "Karnataka", description: "Ancient ruins and temples." },
    { name: "Jaipur City Palace", location: "Rajasthan", description: "Historic royal residence." },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Explore Heritage & Culture 🏛️</h2>
      <p className="mb-6 text-gray-600">Discover iconic heritage sites and cultural destinations.</p>
      <div className="grid md:grid-cols-3 gap-4">
        {heritageSites.map((site, idx) => (
          <div key={idx} className="bg-white p-4 shadow rounded-lg">
            <h3 className="text-xl font-semibold">{site.name}</h3>
            <p className="text-gray-500">{site.location}</p>
            <p className="text-gray-700 mt-2">{site.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
        <p className="text-gray-700">📍 Map Integration Coming Soon...</p>
      </div>
    </div>
  );
}
