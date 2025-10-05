import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Safety from "./pages/safety";
import Emergency from "./pages/emergency";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4 bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/emergency" element={<Emergency />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
