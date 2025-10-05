import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold mb-4">Welcome to Saathi 👣</h2>
      <p className="text-lg text-gray-600 mb-8">
        Discover culture, explore heritage, and travel safely — all in one place.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/explore" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Explore Heritage
        </Link>
        <Link to="/safety" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Women Safety
        </Link>
        <Link to="/emergency" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
          Emergency Help
        </Link>
      </div>
    </div>
  );
}
