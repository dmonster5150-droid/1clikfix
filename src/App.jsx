// src/App.jsx
import { Routes, } from "react-router-dom";

import Landing from "./pages/Landing"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/provider-dashboard" element={<ProviderDashboard />} />
    </Routes>
  );
}

export default App;
