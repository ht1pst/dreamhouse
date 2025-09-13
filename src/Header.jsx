import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white h-20 w-full fixed z-50 px-6 md:px-12 shadow-md">
      {/* Logo */}
      <h1 className="font-semibold text-xl md:text-2xl">DREAMINGHOME</h1>

      {/* Desktop Nav (only visible on lg and above) */}
      <nav className="hidden lg:flex space-x-8 items-center">
        <div className="flex items-center space-x-6 text-sm rounded-full px-4 py-2 
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-300 
                        text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
          <a href="#" className="px-4 py-1 bg-white text-black rounded-full">
            Home
          </a>
          <a href="#properties">Properties</a>
          <a href="#about">About Us</a>
          <a href="#testimonial">Testimonials</a>
          <a href="#blog">Blog</a>
          <a href="#FAQ">FAQ</a>
        </div>
      </nav>

      {/* Right Side (desktop, lg only) */}
      <div className="hidden lg:flex space-x-6 items-center">
        <button className="font-semibold">ENG</button>
        <button className="px-4 py-2 bg-white text-black rounded-full font-semibold shadow">
          Contact Us
        </button>
      </div>

      {/* Hamburger (shows on <lg screens, so mobile + tablet) */}
      <button
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 lg:hidden">
          <a href="#" className="text-gray-900 font-semibold">
            Home
          </a>
          <a href="#properties">Properties</a>
          <a href="#about">About Us</a>
          <a href="#testimonial">Testimonials</a>
          <a href="#blog">Blog</a>
          <a href="#FAQ">FAQ</a>
          <button className="font-semibold">ENG</button>
          <button className="px-6 py-2 bg-gray-900 text-white rounded-full">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
