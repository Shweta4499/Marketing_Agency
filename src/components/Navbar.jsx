import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", id: "features" },
    { label: "How it works", id: "how-it-works" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQs", id: "faqs" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-black px-6 md:px-12 py-4">
      <div className="flex items-center justify-between">
      {/* ✅ Left: Logo */}
<div className="flex items-center gap-2">
  <img
    src={logo}
    alt="PureMark Agency Logo"
    className="w-26 h-26 object-contain"
  />
  <span className="text-white font-semibold text-lg">PureMark Agency</span>
</div>


        {/* ✅ Center: Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-6 bg-[#0c0c0c] px-6 py-2 rounded-full border border-neutral-800">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-neutral-400 hover:text-white transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ Right: CTA Button (Always visible) */}
        <button className="hidden md:block bg-[#111111] border border-neutral-800 px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-neutral-900 transition">
          Notify me
        </button>

        {/* ✅ Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ✅ Mobile Menu Items */}
      {menuOpen && (
        <div className="mt-4 md:hidden space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-neutral-400 hover:text-white transition text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="w-full bg-[#111111] border border-neutral-800 px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-neutral-900 transition">
            Notify me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
