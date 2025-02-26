import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AddWatch from "./components/AddWatch.jsx";
import EditWatch from "./components/EditWatch.jsx";
import WatchDetails from "./components/WatchDetails.jsx";
import About from "./components/about.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/api/watches" element={<AddWatch />} />
        <Route path="/api/watches/:id" element={<EditWatch />} />
        <Route path="/watches/:id" element={<WatchDetails />} />
        <Route path="/about" element={<About />} /> {/* Add the About route */}
      </Routes>
    </Router>
  </StrictMode>
);
