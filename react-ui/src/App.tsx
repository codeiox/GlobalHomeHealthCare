import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home.tsx"; // path to Home component
import { About } from "./About.tsx";
import { Service } from "./Service.tsx";
import { Contact } from "./Contact"; // path to Contact component
import "./index.css";
import { Resource } from "./Resource.tsx";
import { Employment } from "./Employment.tsx"; // Import custom styles

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Loads Home at "/" */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
