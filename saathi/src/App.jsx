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

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Explore from './components/Explore';
// import Safety from './components/Safety';
// import Header from './components/Header'; // Header ko import karein

// function App() {
//   return (
//     <BrowserRouter>
//       <Header /> {/* Header ko Routes ke bahar rakhein */}
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/explore" element={<Explore />} />
//           <Route path="/safety" element={<Safety />} />
//           {/* Emergency page ka route bhi add karein */}
//         </Routes>
//       </main>
//       {/* Yahaan aap Footer component bhi add kar sakti hain */}
//     </BrowserRouter>
//   );
// }

// export default App;