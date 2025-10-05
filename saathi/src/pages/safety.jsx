import { useState } from "react";

export default function Safety() {
  const [alertSent, setAlertSent] = useState(false);

  const sendSOS = () => {
    setAlertSent(true);
    setTimeout(() => setAlertSent(false), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Women Safety Center 🛡️</h2>
      <p className="mb-6 text-gray-600">Stay aware, stay safe. Use our tools to travel confidently.</p>

      <div className="text-center">
        <button
          onClick={sendSOS}
          className="bg-red-600 text-white text-xl px-10 py-4 rounded-full hover:bg-red-700 transition"
        >
          🚨 Send SOS Alert
        </button>
        {alertSent && <p className="mt-4 text-green-600 font-semibold">✅ SOS Sent to Emergency Contacts!</p>}
      </div>

      <div className="mt-8 bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-2">Safety Tips:</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Share your live location with trusted contacts.</li>
          <li>Avoid poorly lit or isolated areas at night.</li>
          <li>Keep emergency numbers saved and accessible.</li>
        </ul>
      </div>
    </div>
  );
}
