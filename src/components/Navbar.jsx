import React from "react";
import Svg from "../assets/Logo.jsx";
import { Link } from "react-router-dom";

function Navbar({ bg = "#232020", accent = "#4f4c4b" }) {
  return (
    <nav
      className="sticky top-0 left-0 p-4 md:p-6 w-full md:h-24"
      style={{
        backgroundImage: `radial-gradient(${accent} 1.5px, transparent 1.5px), radial-gradient(${accent} 1.5px, transparent 1.5px)`,
        backgroundColor: bg,
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0, 15px 15px",
      }}
    >
      <Link to="/" className="inline-block w-[48px]">
        <Svg width={48} className="z-[1000] shadow-lg" />
      </Link>
    </nav>
  );
}

export default Navbar;
