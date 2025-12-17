import { useState, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";
import Lasticon from "./Lasticon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`
        fixed top-0 z-50 w-full bg-white border-b
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-11/12 mx-auto px-2">
        <div className="flex h-18 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold">
              F
            </div>
            <span className="text-xl text-black font-semibold">Floka</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-full justify-between text-gray-700 px-20">
            <a href="#home" className="hover:text-black">Home</a>
            <a href="#pages" className="hover:text-black">Pages</a>
            <a href="#portfolio" className="hover:text-black">Portfolio</a>
            <a href="#blog" className="hover:text-black">Blog</a>
          </div>

          {/* Right side (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="mailto:info@floka.com"
              className="text-gray-700 hover:text-black"
            >
              info@floka.com
            </a>

            <Lasticon />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[6px] z-50"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[2px] w-6 bg-black transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-black transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-black transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white border-b shadow transition-all duration-300 ${
          open ? "top-16 opacity-100" : "-top-96 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 p-6 text-gray-700">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#pages" onClick={() => setOpen(false)}>Pages</a></li>
          <li><a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a></li>
          <li><a href="#blog" onClick={() => setOpen(false)}>Blog</a></li>
          <li className="pt-4 border-t flex items-center justify-between">
            <a href="mailto:info@floka.com">info@floka.com</a>
            <FiMoreVertical className="text-xl" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
