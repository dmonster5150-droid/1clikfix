import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Client from "./pages/Client.jsx";
import Provider from "./pages/Provider.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-red-600 text-white flex justify-between">
        <h1 className="font-bold text-lg">1ClikFix</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/client">Client</Link>
          <Link to="/provider">Provider</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/client" element={<Client />} />
        <Route path="/provider" element={<Provider />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
