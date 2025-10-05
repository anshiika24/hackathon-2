export default function Emergency() {
  const helplines = [
    { name: "Women Helpline", number: "1091" },
    { name: "Police", number: "100" },
    { name: "Ambulance", number: "102" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Emergency Help 🚨</h2>
      <p className="mb-6 text-gray-600">Contact emergency services instantly when you need help.</p>

      <div className="grid md:grid-cols-3 gap-4">
        {helplines.map((h, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold">{h.name}</h3>
            <p className="text-2xl text-blue-600 mt-2">{h.number}</p>
            <a href={`tel:${h.number}`} className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              📞 Call Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
