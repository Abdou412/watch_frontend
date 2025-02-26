import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AddWatch from "./components/AddWatch.jsx";
import EditWatch from "./components/EditWatch.jsx";
import WatchDetails from "./components/WatchDetails.jsx"; // Import the WatchDetails component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/watches/:id" element={<WatchDetails />} />{" "}
        {/* Add the WatchDetails route */}
        <Route path="/api/watches/" element={<AddWatch />} />
        <Route path="/api/watches/:id" element={<EditWatch />} />
      </Routes>
    </Router>
  </StrictMode>
);
