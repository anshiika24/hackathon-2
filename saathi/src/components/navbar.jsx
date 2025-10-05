import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Saathi</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/explore" className="hover:underline">Explore</Link>
          <Link to="/safety" className="hover:underline">Safety</Link>
          <Link to="/emergency" className="hover:underline">Emergency</Link>
        </div>
      </div>
    </nav>
  );
}
