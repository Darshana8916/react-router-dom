import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <nav style={{ padding: "16px", display: "flex", gap: "16px" }}>
      <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}>
        About
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}>
        Contact
      </NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

